import React from 'react';
import styled from 'styled-components';
import EmblaCarousel from '../components/Carousel/EmblaCarousel';
import ProductsCarousel from '../components/Carousel/ProductsCarousel';
import {
  Heading,
  Text,
  ButtonLink,
  Section,
  Wrapper
} from '../components/styled';
import theme from '../theme/theme';

import SlideOne from '../components/Slides/SlideOne';

const carouselOptions = {
  draggable: false,
  loop: true,
  arrows: true,
  containScroll: 'keepSnaps' as const,
  dragFree: false
};

// TODO Add graphics around this section
const SecondSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const products = [
  {
    image:
      'https://contents.mediadecathlon.com/p1813000/k8a7fafef197648f95e7e8e220b3c240b/1813000_default.jpg?format=auto&quality=60&f=800x0',
    rating: 4,
    title: 'Pume - Essential Big Cat Tee - Grey Heather - Mens',
    price: 30.99
  },
  {
    image:
      'https://contents.mediadecathlon.com/p1813000/k8a7fafef197648f95e7e8e220b3c240b/1813000_default.jpg?format=auto&quality=60&f=800x0',
    rating: 4,
    title: 'Pume - Essential Big Cat Tee - Grey Heather - Mens',
    price: 30.99
  },
  {
    image:
      'https://contents.mediadecathlon.com/p1813000/k8a7fafef197648f95e7e8e220b3c240b/1813000_default.jpg?format=auto&quality=60&f=800x0',
    rating: 4,
    title: 'Pume - Essential Big Cat Tee - Grey Heather - Mens',
    price: 30.99
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71N2PFtrYcL._UL1500_.jpg',
    rating: 3,
    title: 'Puma - Ignite Flash EvoKNIT - Black - Mens',
    price: 99.99
  },
  {
    image:
      'https://www.decathlon.ie/media/catalog/product/cache/2/image/600x450/9df78eab33525d08d6e5fb8d27136e95/3/8/38_p1536138_8516951.jpg',
    rating: 5,
    title: 'Nike - Pro Hypercool Capri - Black - Womens',
    price: 49.99
  }
];

const FeaturedSectionStyle = styled(Wrapper)``;

const Home = () => {
  return (
    <>
      <EmblaCarousel options={carouselOptions}>
        <SlideOne background="/images/carousel-bicycle.webp" />
      </EmblaCarousel>
      <SecondSection backgroundColor={theme.colors.lightGrey}>
        <Heading color="black" fontSize="4rem" as="h1">
          <>
            Where all the leading sports brands come to play, <br /> we bring
            you stirling sports
          </>
        </Heading>
      </SecondSection>
      <Section>
        <Wrapper>
          <ProductsCarousel
            options={{
              loop: false,
              draggable: true,
              arrows: false,
              dragFree: true,
              containScroll: 'keepSnaps' as const
            }}
            products={products}
          />
        </Wrapper>
      </Section>
    </>
  );
};

export default Home;
