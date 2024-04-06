import styled from "styled-components";
import { Menu, Button } from "antd";

export const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
`;

export const LogoNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-left: 5rem;
`;

export const Logo = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

export const Name = styled.h1`
  font-size: 1.5rem;
  color: #000;
  margin: 0;
`;

export const MenuDropdownContainer = styled(Menu)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
  margin-right: 5rem;
`;

export const CustomButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  font-size: 1rem;
  font-weight: 600;

  width: 106px;
  height: 48px;

  border-radius: 20px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;
