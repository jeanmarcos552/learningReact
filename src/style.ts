import styled from 'styled-components';

export const ContainerDefault = styled.div`
  display: flex;
`;

export const Center = styled.div`
  text-align: center;
  margin: auto;
`;

export const Sidebar = styled.div`
  background: #000;

  width: 150px;
  text-align: center;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* height: calc(100vh - 107px); */
    height: calc(100vh - 38px);

    li {
      overflow: hidden;
      border-top-left-radius: 10px;
      background: #1a1a1a;
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
      margin: 15px 5px;
      transition: 0.3s;
      a {
        color: white;
        text-decoration: none;
        padding: 15px 0;
        display: block;
      }
      &:hover {
        box-shadow: 0px 5px 5px -2px #201f1f;
        border-bottom: 1px solid #dd554b;
      }
    }
  }
`;

export const SpanName = styled.div`
  position: relative;
  span {
    /* position: absolute; */
    bottom: 8px;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    color: #fff;
    font-weight: 500;
    margin: 10px 0;
  }
`;
