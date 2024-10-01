
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDataById } from './test-feature.slice';

// const MyComponent = () => {
//   const dispatch = useDispatch();
//   const data = useSelector((state: any) => state.data.item);
//   const loading = useSelector((state: any) => state.data.loading);
//   const error = useSelector((state: any) => state.data.error);

//   useEffect(() => {
//     dispatch(fetchDataById());
//   }, [dispatch]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return <div>Data: {data ? JSON.stringify(data) : 'No data found'}</div>;
// };

// export default MyComponent;