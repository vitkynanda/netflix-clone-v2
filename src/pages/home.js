import React from "react";
import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { OptForm } from "../components";
import { Feature } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV Programmes and more.
          </Feature.Title>
          <Feature.SubTitle>Watch anywere. Cancel at anytime</Feature.SubTitle>
          <Feature.Text>
            Ready to watch ? enter your email to create and restart your
            membership.
          </Feature.Text>
          <OptForm>
            <OptForm.Input placeholder="Enter email addrress" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
