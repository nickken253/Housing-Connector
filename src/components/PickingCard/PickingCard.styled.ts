import styled from "styled-components";

export const Content = styled.div`
  /* Frame 14123 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;

  margin: 0 auto;
  transition: 0.3s ease-in-out;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 1;
`;

export const Title = styled.div`
  /* Profile */

  /* Heading/Small Bold */
  font-family: "SVN-Sofia Pro", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  color: #000000;
  transition: 0.3s ease-in-out;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const Des = styled.div`
  font-family: "SVN-Sofia Pro", sans-serif;
`;

export const IconWrapper = styled.div`
  transition: 0.3s ease-in-out;
`;

export const TextWrapper = styled.div`
  text-align: left;
`;

export const Wrapper = styled.div`
  /* Frame 14124 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 56px 70px;
  margin-bottom: 24px;
  cursor: pointer;

  background: #ffffff;
  /* Shadow color */
  box-shadow: 0px 10px 28px rgba(41, 134, 254, 0.15);
  border: 1px solid white;
  border-radius: 20px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 10px 28px rgba(41, 134, 254, 0.3);
    border: 1px solid #2986fe;
    ${Title} {
      color: #2986fe;
    }
    ${Des} {
    }
    ${Content} {
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
      color: #2986fe;
    }
    ${IconWrapper} {
      transform: translateX(30px);
      
    }
  }
`;
