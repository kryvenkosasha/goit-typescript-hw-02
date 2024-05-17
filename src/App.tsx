import React, { useState, useEffect } from "react";
import "./App.css";
import { requestPicturesQuery, UnsplashPhoto } from "./api";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root") as HTMLElement);

function App() {
  const [pictures, setPictures] = useState<UnsplashPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<string | null>(null);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(true);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchPicturesQuery() {
      try {
        setError(false);
        setLoading(true);
        const data = await requestPicturesQuery(query, page);
        setPictures((prev) => [...prev, ...data.results]);
        if (data.total === 0) {
          setError(true);
          setShowLoadMore(false);
          return;
        }
        setShowLoadMore(true);
      } catch (error) {
        setError(true);
        setShowLoadMore(false);
      } finally {
        setLoading(false);
      }
    }

    fetchPicturesQuery();
  }, [query, page]);

  const onSearchBar = (name: string) => {
    setQuery(name);
    setPictures([]);
    setPage(1);
  };

  const onSearchPage = () => {
    setPage((page) => page + 1);
  };

  const openModal = (picture: UnsplashPhoto) => {
    setModalData(picture.urls.regular);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalData(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        modalData={modalData}
      />
      <SearchBar onSearchBar={onSearchBar} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {pictures && (
        <ImageGallery pictures={pictures} onImageClick={openModal} />
      )}
      {query.length !== 0 && showLoadMore && (
        <LoadMoreBtn onSearchPage={onSearchPage} />
      )}
    </div>
  );
}

export default App;


