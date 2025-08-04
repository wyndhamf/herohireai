import { removeBackground, loadImageFromUrl, changeImageColor } from '../lib/backgroundRemoval';

export const processAndSaveLogo = async () => {
  try {
    console.log('Starting logo processing...');
    
    // Load the uploaded image
    const originalImage = await loadImageFromUrl('/lovable-uploads/014c4ba7-5d4b-4525-afa3-5888efc64ece.png');
    console.log('Original image loaded');
    
    // Remove background
    const backgroundRemovedBlob = await removeBackground(originalImage);
    console.log('Background removed');
    
    // Load the background-removed image
    const backgroundRemovedImage = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(backgroundRemovedBlob);
    });
    
    // Change color to blue (same as primary color)
    const blueLogoBlob = await changeImageColor(backgroundRemovedImage, '#3b82f6');
    console.log('Color changed to blue');
    
    // Convert to data URL for saving
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blueLogoBlob);
    });
    
    console.log('Logo processing completed');
    return dataUrl;
    
  } catch (error) {
    console.error('Error processing logo:', error);
    throw error;
  }
};