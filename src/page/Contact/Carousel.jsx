import { useEffect } from 'react';
import Glide from '@glidejs/glide';
import logo1 from '../../assets/ContactBanner/1.png';
import logo2 from '../../assets/ContactBanner/1.png';
export default function Carousel() {
  useEffect(() => {
    const slider = new Glide('.glide-09', {
      type: 'carousel',
      focusAt: 'center',
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: '[&>*]:bg-wuiSlate-700',
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="glide-09 relative w-full p-8">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src={logo1}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src={logo2}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-3.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-4.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-5.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-6.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
