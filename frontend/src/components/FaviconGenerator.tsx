import { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

export default function FaviconGenerator() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const generateFavicon = (size: number, isDark: boolean = false) => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Background
    const bgColor = isDark ? '#0d1117' : '#00A7A5';
    ctx.fillStyle = bgColor;
    
    // Rounded rectangle for background
    const radius = size * 0.1875; // 96/512 = 0.1875
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(size - radius, 0);
    ctx.quadraticCurveTo(size, 0, size, radius);
    ctx.lineTo(size, size - radius);
    ctx.quadraticCurveTo(size, size, size - radius, size);
    ctx.lineTo(radius, size);
    ctx.quadraticCurveTo(0, size, 0, size - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.closePath();
    ctx.fill();

    // Scale factor for lettermark positioning
    const scale = size / 512;
    const offsetX = 128 * scale;
    const offsetY = 128 * scale;

    // Letter T
    const tColor = isDark ? '#00d4d2' : '#ffffff';
    ctx.fillStyle = tColor;
    
    // T horizontal bar
    roundRect(ctx, offsetX, offsetY, 256 * scale, 56 * scale, 8 * scale);
    ctx.fill();
    
    // T vertical bar
    roundRect(ctx, offsetX + 100 * scale, offsetY + 56 * scale, 56 * scale, 200 * scale, 8 * scale);
    ctx.fill();

    // Letter F accent (semi-transparent)
    const fColor = isDark ? '#0de6e3' : '#ffffff';
    
    // F vertical bar
    ctx.fillStyle = fColor;
    ctx.globalAlpha = isDark ? 0.4 : 0.3;
    roundRect(ctx, offsetX, offsetY, 56 * scale, 256 * scale, 8 * scale);
    ctx.fill();
    
    // F top bar
    roundRect(ctx, offsetX, offsetY, 180 * scale, 56 * scale, 8 * scale);
    ctx.fill();
    
    // F middle bar
    roundRect(ctx, offsetX, offsetY + 100 * scale, 140 * scale, 48 * scale, 8 * scale);
    ctx.fill();

    // Modern accent elements
    ctx.globalAlpha = isDark ? 0.6 : 0.5;
    ctx.beginPath();
    ctx.arc(offsetX + 220 * scale, offsetY + 220 * scale, 18 * scale, 0, 2 * Math.PI);
    ctx.fill();

    ctx.globalAlpha = isDark ? 0.5 : 0.4;
    roundRect(ctx, offsetX + 200 * scale, offsetY + 32 * scale, 8 * scale, 192 * scale, 4 * scale);
    ctx.fill();

    ctx.globalAlpha = 1;

    return canvas;
  };

  const roundRect = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  };

  const downloadFavicon = (size: number, filename: string) => {
    const canvas = generateFavicon(size, mode === 'dark');
    if (!canvas) return;

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
  };

  const downloadAllSizes = () => {
    const sizes = [
      { size: 16, name: 'favicon-16x16.png' },
      { size: 32, name: 'favicon-32x32.png' },
      { size: 192, name: 'favicon-192x192.png' },
      { size: 512, name: 'favicon-512x512.png' },
      { size: 180, name: 'apple-touch-icon.png' }
    ];

    sizes.forEach(({ size, name }, index) => {
      setTimeout(() => {
        downloadFavicon(size, mode === 'dark' ? name.replace('.png', '-dark.png') : name);
      }, index * 500); // Stagger downloads
    });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-2">ThesisFlow Favicon Generator</h1>
          <p className="text-[var(--text-secondary)]">
            Generate production-ready PNG favicons for Google Search Results
          </p>
        </div>

        <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-8">
          {/* Theme Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setMode('light')}
              variant={mode === 'light' ? 'default' : 'outline'}
            >
              Light Mode
            </Button>
            <Button
              onClick={() => setMode('dark')}
              variant={mode === 'dark' ? 'default' : 'outline'}
            >
              Dark Mode
            </Button>
          </div>

          {/* Preview */}
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            {[16, 32, 64, 128, 192].map((size) => {
              const canvas = generateFavicon(size, mode === 'dark');
              return (
                <div key={size} className="text-center">
                  <div 
                    className="mb-2 inline-block border border-[var(--border-primary)] rounded"
                    style={{ 
                      background: mode === 'dark' ? '#ffffff' : '#f5f5f5',
                      padding: size < 64 ? '8px' : '16px'
                    }}
                  >
                    <canvas
                      ref={(el) => {
                        if (el && canvas) {
                          const ctx = el.getContext('2d');
                          if (ctx) {
                            el.width = size;
                            el.height = size;
                            ctx.drawImage(canvas, 0, 0);
                          }
                        }
                      }}
                      width={size}
                      height={size}
                    />
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">{size}×{size}</div>
                </div>
              );
            })}
          </div>

          {/* Download Buttons */}
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-lg mb-2">Download Individual Sizes</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Button
                onClick={() => downloadFavicon(16, mode === 'dark' ? 'favicon-16x16-dark.png' : 'favicon-16x16.png')}
                variant="outline"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                16×16
              </Button>
              <Button
                onClick={() => downloadFavicon(32, mode === 'dark' ? 'favicon-32x32-dark.png' : 'favicon-32x32.png')}
                variant="outline"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                32×32
              </Button>
              <Button
                onClick={() => downloadFavicon(192, mode === 'dark' ? 'favicon-192x192-dark.png' : 'favicon-192x192.png')}
                variant="outline"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                192×192
              </Button>
              <Button
                onClick={() => downloadFavicon(512, mode === 'dark' ? 'favicon-512x512-dark.png' : 'favicon-512x512.png')}
                variant="outline"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                512×512
              </Button>
              <Button
                onClick={() => downloadFavicon(180, mode === 'dark' ? 'apple-touch-icon-dark.png' : 'apple-touch-icon.png')}
                variant="outline"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Apple 180×180
              </Button>
            </div>

            <div className="pt-4 border-t border-[var(--border-primary)]">
              <Button
                onClick={downloadAllSizes}
                className="w-full"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download All Sizes ({mode === 'dark' ? 'Dark Mode' : 'Light Mode'})
              </Button>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 p-4 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-lg">
            <h4 className="mb-2">📋 Next Steps:</h4>
            <ol className="text-sm text-[var(--text-secondary)] space-y-1 list-decimal list-inside">
              <li>Download both Light and Dark mode versions</li>
              <li>Upload PNG files to your <code>/public</code> folder</li>
              <li>Replace the placeholder files (favicon-192.png, favicon-512.png)</li>
              <li>Deploy to production (https://thesisflow.com)</li>
              <li>Submit sitemap to Google Search Console</li>
              <li>Wait 1-2 weeks for Google to crawl and display favicon</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
