import { useSearchModal, HomePageSearchBar } from "@backstage/plugin-search";
import { Container, Paper } from "@material-ui/core";
import HomeHeroLinks from "../layout/HomeHeroLinks/HomeHeroLinks";
import React from "react";
import  './HomePage.css'



export default function HomePage() {
    const { state, toggleModal, setOpen } = useSearchModal();
    console.log('search state', state, toggleModal);
    return (
      <main className="main-home">
        <div className="hero">
          <h1>WIPO</h1>
          <Container>
            <HomePageSearchBar color="secondary"/>
          </Container>
              {/* <SearchModalProvider>
                   <SearchModal toggleModal={toggleModal} open={state.open}/>
              </SearchModalProvider> */}
        </div>
  
        <HomeHeroLinks />
      </main>
    );
  }