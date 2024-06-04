import os

def rename_images(folder_path):
    # Fetch all image files in the directory
    images = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f)) and f.lower().endswith(('.png', '.jpg', '.jpeg', '.svg'))]
    
    # Sort the images for consistent ordering
    images.sort()

    # Rename images
    for count, image in enumerate(images, 1):
        file_extension = os.path.splitext(image)[1]
        new_name = f'image_{count}{file_extension}'
        os.rename(os.path.join(folder_path, image), os.path.join(folder_path, new_name))
        print(f'Renamed: {image} to {new_name}')

# Example usage
folder_path = 'public/image/gallery'
rename_images(folder_path)
