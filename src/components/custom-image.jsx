/* eslint-disable no-unsafe-optional-chaining */
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity';

const CustomImage = function ({ dataURL, cropped }) {
	// console.log('custom image', dataURL);
	const src = urlForImage(dataURL).width(2000).url();

	const srcWidth = dataURL.asset?.metadata?.dimensions?.width;
	const srcHeight = dataURL.asset?.metadata?.dimensions?.height;

	const cropTop = dataURL.crop?.top * 100;
	const cropRight = dataURL.crop?.right * 100;
	const cropBottom = dataURL.crop?.bottom * 100;
	const cropLeft = dataURL.crop?.left * 100;

	const cropX = cropLeft + cropRight;
	const cropY = cropTop + cropBottom;

	const cropXValue = (srcWidth * cropX) / 100;
	const cropYValue = (srcHeight * cropY) / 100;

	const cropWidth = srcWidth - cropXValue;
	const cropHeight = srcHeight - cropYValue;

	const width =
		dataURL.crop?.right || dataURL.crop?.left ? cropWidth : srcWidth;
	const height =
		dataURL.crop?.top || dataURL.crop?.bottom ? cropHeight : srcHeight;

	const backgroundPositionX = `${dataURL?.hotspot?.x * 100}%`;
	const backgroundPositionY = `${dataURL?.hotspot?.y * 100}%`;

	return (
		<Image
			src={src}
			alt={dataURL.alt}
			width={cropped ? null : width}
			height={cropped ? null : height}
			layout={cropped ? 'fill' : 'intrinsic'}
			objectFit={cropped ? 'cover' : null}
			objectPosition={
				dataURL?.hotspot
					? `${backgroundPositionX} ${backgroundPositionY}`
					: 'center center'
			}
		/>
	);
};

export default CustomImage;
