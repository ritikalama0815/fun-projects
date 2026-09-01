import imageio.v3 as iio


image_name = ['pic1.png', 'pic2.png', 'pic3.png']
images = []

for image in image_name:
    images.append(iio.imread(image))
    
iio.imwrite('output.gif', images, duration=500, loop = 0)
