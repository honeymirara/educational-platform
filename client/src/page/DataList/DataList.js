import { useState, useEffect } from 'react';
import axios from 'axios';

const [data, setData] = useState([])
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = (10); //кол-во элементов отображаемое на странице

const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/api/');
    setData(response.data)
}

useEffect(() => {
    return fetchData()
}, [])

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };