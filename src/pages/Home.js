import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';


const Home = () => {
  return(
    <div className="container">
      <Header />
      <div class="head-card">
      <Card image={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.indojati.id%2Fwp-content%2Fuploads%2F2020%2F03%2FKursi-Bangku-Sofa-Tamu-Modern-Jahitan.jpg&imgrefurl=https%3A%2F%2Fwww.indojati.id%2Fproduct%2Fkursi-bangku-sofa-tamu-modern-jahitan%2F&tbnid=Cv6bBYpmR_tdZM&vet=1&docid=F7nZTeFv3knw0M&w=600&h=600&source=sh%2Fx%2Fim'}  />
      <Card image={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.indojati.id%2Fwp-content%2Fuploads%2F2020%2F03%2FBangku-Sofa-Tamu-Mewah-Jok-Bludru-Jahitan.jpg&imgrefurl=https%3A%2F%2Fwww.indojati.id%2Fproduct%2Fbangku-sofa-tamu-mewah-jok-jahitan%2F&tbnid=vbquvim2v8KEcM&vet=1&docid=5SN6Z7sJyhTvWM&w=600&h=600&itg=1&source=sh%2Fx%2Fim'}/>
      <Card image={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.indojati.id%2Fwp-content%2Fuploads%2F2020%2F03%2FBangku-Sofa-Tamu-Mewah-Jok-Jahitan.jpg&imgrefurl=https%3A%2F%2Fwww.indojati.id%2Fproduct%2Fbangku-sofa-tamu-mewah-jok-jahitan%2F&tbnid=3EgqsixH1VUO6M&vet=1&docid=5SN6Z7sJyhTvWM&w=600&h=600&itg=1&source=sh%2Fx%2Fim'}/>
      </div>
    </div >
  );
}

export default Home;
