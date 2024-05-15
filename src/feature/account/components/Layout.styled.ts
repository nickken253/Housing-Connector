import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: left;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px 50px;
  width: 100%;
`;

export const Header = styled.div`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  /* identical to box height, or 133% */

  color: #000000;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ContentWrapper = styled.div``;

export const Title = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */
  font-feature-settings: "pnum" on, "lnum" on;

  color: #000000;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Des = styled.div``;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`;

export const EditWrapper = styled.div`
  display: flex;
  width: 40%;
`;
