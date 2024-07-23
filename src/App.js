import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
//import { AuthContextProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
          <GridItem
            as="aside"
            colSpan={{ base: 6, lg: 1 }}
            bg="purple.400"
            minHeight={{ lg: '100vh' }}
            p={{ base: '20px', lg: '30-px' }}
          >
            <Sidebar />
          </GridItem>
          <GridItem
            as="main"
            colSpan={{ base: 6, lg: 5 }}
            p="40px"
          >
            <Navbar />
            <Outlet />
          </GridItem>
      </Grid>
    </QueryClientProvider>
  );
}

export default App;