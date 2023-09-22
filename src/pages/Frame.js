//Main page

import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Geeklogo1Icon = styled.img`
  position: absolute;
  top: 111px;
  left: 315px;
  width: 374px;
  height: 393px;
  object-fit: cover;
`;
const FrameChild = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
`;
const Team = styled.div`
  position: absolute;
  top: 0px;
  left: 755px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
  cursor: pointer;
`;
const Vision = styled.div`
  position: absolute;
  top: 0px;
  left: 833px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 63px;
  cursor: pointer;
`;
const Geeklogo2Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 22px;
  width: 60px;
  height: 63px;
  object-fit: cover;
`;
const Geeklogo1ParentRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 617px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-mini);
  color: var(--color-gray-400);
  font-family: var(--font-inter);
`;

const Frame = () => {
  const navigate = useNavigate();

  const onTeamTextClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onVisionTextClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onValueTextClick = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  return (
    <Geeklogo1ParentRoot>
      <Geeklogo1Icon alt="" src="/geeklogo-11@2x.png" />
      <FrameChild />
      <Home>Home</Home>
      <Team onClick={onTeamTextClick}>Team</Team>
      <Vision onClick={onVisionTextClick}>Vision</Vision>
      <Value onClick={onValueTextClick}>Value</Value>
      <Geeklogo2Icon alt="" src="/geeklogo-1@2x.png" />
    </Geeklogo1ParentRoot>
  );
};

export default Frame;
