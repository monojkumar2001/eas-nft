import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgetPassword from "./components/Login-Register/ForgetPassword";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/layout/Footer";
import DashboardPage from "./Pages/DashboardPage";
import Header from "./components/layout/Header";
import Slug from "./components/KnowledgeBaseFaq/Slug";
import "./Style/global/global.css";
import "./Style/layout/Header.css";
import "./Style/layout/footer.css";
import {
  FaqData1,
  FaqData2,
  FaqData3,
  FaqData4,
  FaqData5,
  FaqData6,
} from "./FaqData/FaqData";
import KnowledgeBaseFaq from "./Pages/KnowledgeBaseFaqPage";
import AddressNFTsPage from "./Pages/AddressNFTsPage";
import NFTUseCases from "./Pages/NFTUseCasesPage";
import NftPricingPage from "./Pages/NftPricingPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import MyCollectionPage from "./Pages/MyCollectionPage";
import NFTDetailsPage from "./Pages/NFTDetailsPage";
import CollectionPage from "./Pages/CollectionPage";
import ScrollTopBtn from "./components/ScrollToTop/ScrollTopBtn";
import NewsPage from "./Pages/NewsPage";
import NftSaleCollectionPage from "./Pages/NftSaleCollectionPage";
import ErrorPage from "./Pages/ErrorPage";
import NewsPageDetails from "./Pages/NewsPageDetails";
import CareersPage from "./Pages/CareersPage";
import CareersPageDetails from "./Pages/CareersPageDetails";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import MyNfts from "./components/Dashboard/MyNfts";
import AccountDetails from "./components/Dashboard/AccountDetails";
import TicketMessages from "./components/Ticket/TicketMessages";
import DynamicForm from "./components/Dashboard/ClaimNewNfts";
import Referral from "./components/Dashboard/Referral";
import ContactUs from "./components/Dashboard/ContactUs";
import Ticket from "./components/Ticket/Ticket";
import TermsAndCondition from "./Pages/TermsAndCondition";
import ReferralPage from "./Pages/ReferralPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.baseURL = "https://eas.vegasweb.co/";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app-con">
      <ScrollTopBtn />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/nft-details/:id" element={<NFTDetailsPage />} />
          <Route element={<PrivateRoute />}>
          <Route path="/nft-collection" element={<NftSaleCollectionPage />} />

            <Route path="/my-nft-list" element={<MyCollectionPage />} />
            <Route path="/marketplace" element={<CollectionPage />} />
            
            <Route path="/account" element={<DashboardPage />}>
              <Route index element={<AccountDetails />} />
              <Route path="/account/my-nft" element={<MyNfts />} />
              <Route path="/account/messages" element={<TicketMessages />} />
              <Route path="/account/claim-new-nft" element={<DynamicForm />} />
              <Route path="/account/my-referral" element={<Referral />} />
              <Route path="/account/contact-us" element={<ContactUs />} />
              <Route path="/account/ticket" element={<Ticket />} />
            </Route>
          </Route>
          <Route
            path="/docs"
            element={
              <KnowledgeBaseFaq
                data1={FaqData1}
                data2={FaqData2}
                data3={FaqData3}
                data4={FaqData4}
                data5={FaqData5}
                data6={FaqData6}
              />
            }
          />
          <Route
            path="/docs/:id"
            element={
              <Slug
                data1={FaqData1}
                data2={FaqData2}
                data3={FaqData3}
                data4={FaqData4}
                data5={FaqData5}
                data6={FaqData6}
              />
            }
          />
          <Route path="/address-nfts" element={<AddressNFTsPage />} />
          <Route path="/nft-use-cases" element={<NFTUseCases />} />
          <Route path="/nft-pricing" element={<NftPricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login-register" element={<LoginRegisterPage />} />
          <Route path="/forget" element={<ForgetPassword />} />
          
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsPageDetails />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:id" element={<CareersPageDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/referral" element={<ReferralPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
