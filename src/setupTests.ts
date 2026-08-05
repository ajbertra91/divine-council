import '@testing-library/jest-dom'

class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// jsdom does not implement IntersectionObserver.
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverStub,
})
