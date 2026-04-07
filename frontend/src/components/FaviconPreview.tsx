import { useTheme } from './ThemeProvider';

/**
 * Component to preview how the favicon looks in different contexts
 * This helps visualize the favicon before deploying to production
 */
export function FaviconPreview() {
  const { theme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded-lg shadow-xl p-6 max-w-md z-50">
      <h3 className="text-lg mb-4 text-gray-900 dark:text-white">Favicon Preview</h3>
      
      <div className="space-y-4">
        {/* Browser Tab Simulation */}
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Browser Tab (16x16):</p>
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-[#161b22] p-2 rounded">
            <img 
              src={theme === 'dark' ? '/favicon-dark.svg' : '/favicon.svg'} 
              alt="Favicon" 
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">ThesisFlow - AI-Powered Thesis...</span>
          </div>
        </div>

        {/* Google Search Result Simulation */}
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Google Search Result:</p>
          <div className="bg-white dark:bg-[#161b22] p-3 rounded border border-gray-200 dark:border-[#30363d]">
            <div className="flex items-start gap-2">
              <img 
                src={theme === 'dark' ? '/favicon-dark.svg' : '/favicon.svg'} 
                alt="Favicon" 
                className="w-6 h-6 mt-1"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">https://thesisflow.com</span>
                </div>
                <h4 className="text-blue-600 dark:text-blue-400 text-base hover:underline cursor-pointer">
                  ThesisFlow - AI-Powered Thesis Management Platform
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  AI-powered thesis management SaaS platform for universities and research institutions...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Large Size Preview */}
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Full Size (512x512):</p>
          <div className="flex justify-center bg-gray-50 dark:bg-[#161b22] p-4 rounded">
            <img 
              src={theme === 'dark' ? '/favicon-dark.svg' : '/favicon.svg'} 
              alt="Favicon" 
              className="w-24 h-24"
            />
          </div>
        </div>

        {/* Info */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3">
          <p className="text-xs text-blue-800 dark:text-blue-300">
            <strong>Note:</strong> This preview uses the SVG favicon. For Google search results, convert to PNG format (512x512) for best results.
          </p>
        </div>
      </div>
    </div>
  );
}
