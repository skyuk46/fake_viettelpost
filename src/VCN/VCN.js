import './VCN.css'
import React, { useEffect } from 'react'
import HeadBar from '../HomePage/HeadBar'
import HeadMenu from '../HomePage/HeadMenu'
import DownloadApp from '../HomePage/DownloadApp'
import Footer from '../HomePage/Footer'
import ServiceTitle from './ServiceTitle' 
import Content from './Content'

function VCN() {
    useEffect(
        function (){
          document.title = "Chuyển phát nhanh VCN";
          //document.body.style.background= "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"
        }
      ); 
     
    var serviceName = "Chuyển phát Nhanh";
    var serviceTitle = "CHUYỂN PHÁT NHANH";
    return (
        <div>
            <HeadBar />
            <HeadMenu />
            <ServiceTitle serviceTitle={serviceTitle} />
            <Content serviceName={serviceName}/>
            <DownloadApp />
            <Footer />
        </div>
    );
}

export default VCN;