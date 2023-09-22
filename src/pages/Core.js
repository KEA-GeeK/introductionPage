//core value page
//custom page

import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logoImg from '../img/logoNoName.png';

const CoreValue = styled.div`
  position: absolute;
  top: 78px;
  left: 372px;
  font-size: var(--font-size-11xl);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 262px;
  height: 64px;
`;
const P = styled.p`
  margin: 0;
`;
const Practice1 = styled.p`
  margin: 0;
  color: var(--color-mediumseagreen);
`;
const PracticeTxt = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const Practice = styled.div`
  position: absolute;
  top: 184px;
  left: 214px;
  font-size: var(--font-size-11xl);
  text-align: right;
  display: flex;
  align-items: center;
  width: 265px;
  height: 79px;
`;
const DefiningDirection = styled.div`
  position: absolute;
  top: 148px;
  left: 514px;
  text-align: left;
  display: flex;
  align-items: center;
  width: 265px;
  height: 79px;
`;
const Div = styled.div`
  position: absolute;
  top: 219px;
  left: 514px;
  text-align: left;
  display: flex;
  align-items: center;
  width: 376px;
  height: 55px;
`;
const Cooperation = styled.div`
  position: absolute;
  top: 326px;
  left: 514px;
  font-size: var(--font-size-11xl);
  text-align: left;
  display: flex;
  align-items: center;
  width: 265px;
  height: 79px;
`;
const Vision = styled.div`
  position: absolute;
  top: 468px;
  left: 214px;
  font-size: var(--font-size-11xl);
  text-align: right;
  display: flex;
  align-items: center;
  width: 265px;
  height: 79px;
`;
const CoreChild = styled.div`
  position: absolute;
  top: 218.5px;
  left: 508.5px;
  border-top: 1px solid var(--color-gray-300);
  box-sizing: border-box;
  width: 82px;
  height: 1px;
`;
const ConsistencyEffort = styled.div`
  position: absolute;
  top: 437px;
  left: 514px;
  text-align: left;
  display: flex;
  align-items: center;
  width: 265px;
  height: 79px;
`;
const Div1 = styled.div`
  position: absolute;
  top: 508px;
  left: 514px;
  text-align: left;
  display: flex;
  align-items: center;
  width: 376px;
  height: 55px;
`;
const CoreItem = styled.div`
  position: absolute;
  top: 507.5px;
  left: 508.5px;
  border-top: 1px solid var(--color-gray-300);
  box-sizing: border-box;
  width: 82px;
  height: 1px;
`;
const UnderstandingCommuniction = styled.div`
  position: absolute;
  top: 304px;
  left: 214px;
  text-align: right;
  display: flex;
  align-items: center;
  width: 265px;
  height: 79px;
`;
const Div2 = styled.div`
  position: absolute;
  top: 374px;
  left: 170px;
  text-align: right;
  display: flex;
  align-items: center;
  width: 376px;

  height: 55px;
`;

const CoreInner = styled.div`
  position: absolute;
  top: 373.5px;
  left: 397.5px;
  border-top: 1px solid var(--color-gray-300);
  box-sizing: border-box;
  width: 82px;
  height: 1px;
`;
const RectangleDiv = styled.div`
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
  color: var(--color-gray-400);
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
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
  cursor: pointer;
`;
const Vision2 = styled.div`
  position: absolute;
  top: 0px;
  left: 833px;
  color: var(--color-gray-400);
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
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
`;
const Geeklogo1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 22px;
  width: 60px;
  height: 63px;
  object-fit: cover;
`;
const CoreRoot = styled.div`
  position: relative;
  background-color: #d7d7d7;
  width: 100%;
  height: 617px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-mini);
  color: var(--color-black);
  font-family: var(--font-inter);
`;

const Core = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onTeamTextClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onVisionText1Click = useCallback(() => {
    navigate("/vision");
  }, [navigate]);

  return (
    <CoreRoot>
      <CoreValue>Core Value</CoreValue>
      <Practice>
        <PracticeTxt>
          <P>실행</P>
          <Practice1>Practice</Practice1>
        </PracticeTxt>
      </Practice>
      <DefiningDirection>
        <PracticeTxt>
          <P>Defining</P>
          <P>Direction</P>
        </PracticeTxt>
      </DefiningDirection>
      <Div>해야 할 일을 명확히 알고 해결 방향을 제시하는 능력</Div>
      <Cooperation>
        <PracticeTxt>
          <P>협동</P>
          <Practice1>Cooperation</Practice1>
        </PracticeTxt>
      </Cooperation>
      <Vision>
        <PracticeTxt>
          <P>비전</P>
          <Practice1>Vision</Practice1>
        </PracticeTxt>
      </Vision>
      <CoreChild />
      <ConsistencyEffort>
        <PracticeTxt>
          <P>Consistency</P>
          <P>Effort</P>
        </PracticeTxt>
      </ConsistencyEffort>
      <Div1>목표를 달성하기 위해 배움을 멈추지 않고 노력하는 마음가짐</Div1>
      <CoreItem />
      <UnderstandingCommuniction>
        <PracticeTxt>
          <P>Understanding</P>
          <P>Communiction</P>
        </PracticeTxt>
      </UnderstandingCommuniction>
      <Div2>서로의 장점을 활용하고 의견을 조율하는 능력</Div2>
      <CoreInner />
      <RectangleDiv />
      <Home onClick={onHomeTextClick}>Home</Home>
      <Team onClick={onTeamTextClick}>Team</Team>
      <Vision2 onClick={onVisionText1Click}>Vision</Vision2>
      <Value>Value</Value>
      <Geeklogo1Icon alt="logoImg" src={logoImg} />
    </CoreRoot>
  );
};

export default Core;
