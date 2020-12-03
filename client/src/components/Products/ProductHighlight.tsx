import styled from 'styled-components';
import { SlideProduct } from '../../types';
import { Heading, Text, ButtonLink } from '../styled';
import { Stars } from '../styled/Stars';
import theme from '../../theme/theme';

const ProductContainer = styled.article`
  display: flex;
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 0 0 70%;
  padding-right: 4rem;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const ProductDetails = styled.div`
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

const ProdutTitle = styled(Heading)`
  font-family: 'Source Sans Pro';
  font-weight: 700;
`;

// TODO Set product prop as a product with product:  image, title, price, rating, link to product, and highlights for points

const ProductHighlight: React.FC<{ product: SlideProduct }> = ({ product }) => {
  return (
    <ProductContainer>
      <ImageContainer>
        <StyledImage
          src="./images/products/shoes/running-shoes-2.webp"
          alt=""
        />
      </ImageContainer>
      <ProductDetails>
        <div>{Stars(product.rating)}</div>
        <ProdutTitle as="h2" color="black" fontSize="3rem">
          {product.title}
        </ProdutTitle>
        <Text
          fontWeight={500}
          fontSize="3.5rem"
          fontFamily="Bebas Neue"
        >{`$${product.price}`}</Text>
        <ButtonLink to={'#'} themed={theme.colors.primary}>
          Shop Now
        </ButtonLink>
      </ProductDetails>
    </ProductContainer>
  );
};

export default ProductHighlight;