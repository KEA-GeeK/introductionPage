import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const P = styled.p`
  margin: 0;
`;
const Vision = styled.div`
  position: absolute;
  top: 97px;
  left: 32px;
  color: var(--color-black);
  display: inline-block;
  width: 92px;
  height: 36px;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 140px;
  left: 35px;
  width: 46px;
  height: 1px;
`;
const SystemGathersVariety = styled.div`
  position: absolute;
  top: 166px;
  left: 35px;
  color: var(--color-mediumseagreen);
  text-align: left;
  display: inline-block;
  width: 432px;
  height: 93px;
`;
const Geek = styled.div`
  position: absolute;
  top: 259px;
  left: 32px;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  width: 538px;
  height: 131px;
`;
const Mission = styled.div`
  position: absolute;
  top: 316px;
  left: 844px;
  color: var(--color-black);
  text-align: right;
  display: inline-block;
  width: 116px;
  height: 36px;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 368.5px;
  left: 913.5px;
  border-top: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 47px;
  height: 1px;
`;
const Div = styled.div`
  position: absolute;
  top: 386px;
  left: 528px;
  color: var(--color-mediumseagreen);
  text-align: right;
  display: inline-block;
  width: 432px;
  height: 93px;
`;
const Div1 = styled.div`
  position: absolute;
  top: 479px;
  left: 329px;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  text-align: right;
  display: inline-block;
  width: 631px;
  height: 131px;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-white);
  width: 1005px;
  height: 63px;
`;
const Home = styled.div`
  position: absolute;
  top: 0px;
  left: 677px;
  font-size: var(--font-size-mini);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
  cursor: pointer;
`;
const Team = styled.div`
  position: absolute;
  top: 0px;
  left: 755px;
  font-size: var(--font-size-mini);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
`;
const Vision2 = styled.div`
  position: absolute;
  top: 0px;
  left: 833px;
  font-size: var(--font-size-mini);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
  cursor: pointer;
`;
const Value = styled.div`
  position: absolute;
  top: 0px;
  left: 911px;
  font-size: var(--font-size-mini);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
  cursor: pointer;
`;
const Geeklogo1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 22px;
  width: 60px;
  height: 63px;
  object-fit: cover;
`;
const VisionParentRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 617px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-gray-400);
  font-family: var(--font-inter);
`;

const Frame2 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onVisionText1Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onValueTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <VisionParentRoot>
      <Vision>
        <P>Vision</P>
      </Vision>
      <FrameChild alt="" src="/line-11.svg" />
      <SystemGathersVariety>
        “System gathers variety with knowledge pool”
      </SystemGathersVariety>
      <Geek>GeeK은 다양한 세상을 표현하는 플랫폼을 만듭니다.</Geek>
      <Mission>Mission</Mission>
      <FrameItem />
      <Div>
        <P>{`“변화하는 세상에서 한 발 `}</P>
        <P>앞서가는 개발자”</P>
      </Div>
      <Div1>
        서로의 지식을 융합하여 문제해결에 새로운 방향성을 제시하며 끊임없이
        배우고 성장하는 우수한 개발자의 모습을 완성합니다.
      </Div1>
      <FrameInner />
      <Home onClick={onHomeTextClick}>Home</Home>
      <Team>Team</Team>
      <Vision2 onClick={onVisionText1Click}>Vision</Vision2>
      <Value onClick={onValueTextClick}>Value</Value>
      <Geeklogo1Icon alt="" src="/geeklogo-1@2x.png" />
    </VisionParentRoot>
  );
};

export default Frame2;
