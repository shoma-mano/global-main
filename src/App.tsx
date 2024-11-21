import React from 'react';
import { Route, Switch } from 'wouter';
import Header from './components/Header';
import PropertyList from './components/PropertyList';
import PropertyDetailPage from './pages/PropertyDetailPage';
import SearchFilters from './components/SearchFilters';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-16">
        <Switch>
          <Route path="/" component={() => (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="space-y-8">
                <SearchFilters onSearch={(filters) => console.log('Search:', filters)} />
                <PropertyList />
              </div>
            </div>
          )} />
          <Route path="/property/:id" component={PropertyDetailPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;