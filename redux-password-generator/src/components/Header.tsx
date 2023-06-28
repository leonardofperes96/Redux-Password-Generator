
import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  height: 5rem;
  margin: 0 auto;
  background: var(--main-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

  .logo {
    color: #ffffff;
    margin: 0;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <h1 className="logo">Password Generator</h1>
    </Wrapper>
  );
};

export default Header;
