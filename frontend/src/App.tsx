import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-blue-600 text-white py-6 shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-3xl font-bold">MoneyTracker - FSA_FE04_G2</h1>
              <p className="mt-2 text-sm">Ứng dụng quản lý tài chính cá nhân</p>
            </div>
          </header>

          <main className="max-w-6xl mx-auto px-4 py-12">
            <div className="bg-white rounded-xl shadow-lg p-10 text-center">
              <h2 className="text-4xl font-bold text-green-600 mb-6">Frontend </h2>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App