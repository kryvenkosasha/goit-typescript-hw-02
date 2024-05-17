import React from "react";
import toast, { Toaster } from "react-hot-toast";
import './SearchBar.css';

interface SearchBarProps {
  onSearchBar: (name: string) => void;
}

const notify = () => toast("Please enter search term!");

const SearchBar: React.FC<SearchBarProps> = ({ onSearchBar }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
    if (!name || name.length === 0) {
      notify();
    } else {
      onSearchBar(name);
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="search-title">Find picture on request</h2>
      <input className="search-input" type="text" name="name" placeholder="Search name..." />
      <button className="search-button" type="submit">Search</button>
      <Toaster />
    </form>
  );
};

export default SearchBar;
