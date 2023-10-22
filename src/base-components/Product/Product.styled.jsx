import styled from 'styled-components';
import Button from '../Button/Button';

export const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 260px;
  max-width: 260px;
  height: 275px;
  flex: 1 1 auto;
  border: 1px solid rgba(black, 0.2);
  border-radius: 74% 26% 68% 32% / 26% 66% 34% 74%;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  user-select: none;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    .product-image {
      transform: scale(1.17);
    }

    .product-name {
      &::before {
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }
`;

export const ProductContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3em 0.7em 0.8em 0.7em;
  z-index: 2;
`;

export const ButtonsContainer = styled.div`
  position: relative;
  min-width: 100%;
`;

export const ProductName = styled.p`
  position: relative;
  margin: 0;
  font-size: 0.9em;
  user-select: none;
  text-transform: capitalize;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    border-radius: 4px;
    background-color: #4e97207b;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1em;
  user-select: none;
  margin-top: 4px;
  margin-bottom: 5px;
`;

export const ProductImage = styled.img`
  display: flex;
  width: 60%;
  height: 60%;
  justify-self: center;
  align-self: center;
  transition: transform 0.25s ease-in-out;
`;

export const AddProductButton = styled(Button)`
  position: absolute;
  top: -1.6px;
  left: 122px;
  justify-content: space-between;
  gap: 10px;
  padding: 5.5px;
  color: #13690a;
  background-color: #fafafa;
  border: 1px solid #13690ac8;
  border-radius: 74% 26% 68% 32% / 24% 59% 41% 76%;
  box-shadow: 0px 2.5px 5px rgba(19, 105, 10, 0.2),
    0px 2.5px 5px rgba(19, 105, 10, 0.1);
  font-size: 1.4em;
  transition: 0.23s ease-in-out;

  &:hover {
    color: #fafafa;
    background-color: #13690ac8;
    border: 1px solid #13690a;
    box-shadow: 0px 3px 6px rgba(19, 105, 10, 0.3),
      0px 3px 6px rgba(19, 105, 10, 0.2);
  }
`;

export const RemoveProductButton = styled(Button)`
  position: absolute;
  top: -1.6px;
  left: 74px;
  justify-content: space-between;
  gap: 10px;
  padding: 5.5px;
  color: #fe5a3d;
  background-color: #fafafa;
  border: 1px solid #fe5a3de3;
  border-radius: 74% 26% 68% 32% / 24% 59% 41% 76%;
  box-shadow: 0px 2.5px 5px rgba(254, 90, 61, 0.2),
    0px 2.5px 5px rgba(254, 90, 61, 0.1);
  font-size: 1.4em;
  transition: 0.23s ease-in-out;

  &:hover:not(.disabled) {
    color: #fafafa;
    background-color: #fe5a3de3;
    border: 1px solid #fe5a3d;
    box-shadow: 0px 3px 6px rgba(254, 90, 61, 0.3),
      0px 3px 6px rgba(254, 90, 61, 0.2);
  }

  &.disabled {
    cursor: default;
    opacity: 0.6;
  }
`;

export const SelectedCount = styled.p`
  position: absolute;
  top: -11px;
  right: 50px;
  z-index: 2;
  font-size: 0.95em;
  color: #787878;
`;
