const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Asynchronously import web-vitals library and extract necessary functions
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each web-vitals function with the provided onPerfEntry callback
      getCLS(onPerfEntry); // Cumulative Layout Shift (CLS)
      getFID(onPerfEntry); // First Input Delay (FID)
      getFCP(onPerfEntry); // First Contentful Paint (FCP)
      getLCP(onPerfEntry); // Largest Contentful Paint (LCP)
      getTTFB(onPerfEntry); // Time to First Byte (TTFB)
    });
  }
};

export default reportWebVitals;
