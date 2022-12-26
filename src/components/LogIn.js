import React from "react";
import styled from "styled-components";

function LogIn() {
  return (
    <Constainer>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />

        <SinUp>
          <span>Get All There</span>
        </SinUp>
        <Description>
            kjasfkjdlasjf jadskjfoiuweior lkda fasmnfnjhfd safjdsakfuiowuf ds oidjf idsauiojd fadfaihf dfjhauifh dhufydaui fkjah
        </Description>
        <CTALogoTow src="/images/cta-logo-two.png" />
      </CTA>
    </Constainer>
  );
}

export default LogIn;

const Constainer = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;

  &::before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    opacity: 0.7;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;

`;

const CTALogoOne = styled.img``;

const SinUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;
const Description =styled.p`
    
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center; // it is ganna put line form the longest to shorter
    line-height: 1.5;

`
const CTALogoTow = styled.img`
    width: 90%;

`