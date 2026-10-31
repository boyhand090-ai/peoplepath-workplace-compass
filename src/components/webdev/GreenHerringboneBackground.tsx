import React, { useEffect, useRef } from "react";

export const GreenHerringboneBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = parent ? parent.clientHeight : window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.save();
      ctx.scale(dpr, dpr);

      // Tile dimensions: 2:1 herringbone matching the ceramic brick proportion
      const size = 32; // Short side 32px, long side 64px
      const angle = Math.PI / 4; // 45 degrees
      const origin = { x: width / 2, y: height / 2 };

      // Palette of authentic green ceramic glazes directly modeled on the reference image
      const greenPalette = [
        { main: "#6d9744", highlight: "#86b455", shadow: "#557931" },
        { main: "#5a8035", highlight: "#739d45", shadow: "#456626" },
        { main: "#78a44c", highlight: "#92c25e", shadow: "#5f8538" },
        { main: "#4e722c", highlight: "#658f3b", shadow: "#3c5a20" },
        { main: "#638b3d", highlight: "#7ca84e", shadow: "#4d702d" },
        { main: "#82b052", highlight: "#9ece67", shadow: "#6a9340" },
        { main: "#547831", highlight: "#6c9441", shadow: "#406023" },
        { main: "#709a47", highlight: "#8bb95b", shadow: "#577b33" },
        { main: "#759e49", highlight: "#90be5c", shadow: "#5d8236" },
      ];

      // Grout line style (pale sage/cement color between the tiles)
      const groutColor = "#bcc9b4";
      const groutWidth = 2.4;

      // Transform to rotated space (45 degrees)
      const xAx = Math.cos(angle);
      const xAy = Math.sin(angle);

      // Inverse transform to find visible bounds
      const dot = xAx * xAx + xAy * xAy;
      const im0 = xAx / dot;
      const im1 = -xAy / dot;
      const im2 = xAy / dot;
      const im3 = xAx / dot;

      const toWorld = (px: number, py: number) => {
        const xx = px - origin.x;
        const yy = py - origin.y;
        return {
          x: xx * im0 + yy * im2,
          y: xx * im1 + yy * im3,
        };
      };

      const c1 = toWorld(0, 0);
      const c2 = toWorld(width, 0);
      const c3 = toWorld(width, height);
      const c4 = toWorld(0, height);

      const startX = Math.floor(Math.min(c1.x, c2.x, c3.x, c4.x) / size) - 3;
      const endX = Math.ceil(Math.max(c1.x, c2.x, c3.x, c4.x) / size) + 3;
      const startY = Math.floor(Math.min(c1.y, c2.y, c3.y, c4.y) / size) - 3;
      const endY = Math.ceil(Math.max(c1.y, c2.y, c3.y, c4.y) / size) + 3;

      // Background grout base
      ctx.fillStyle = groutColor;
      ctx.fillRect(0, 0, width, height);

      // Apply rotation transform
      ctx.setTransform(xAx * dpr, xAy * dpr, -xAy * dpr, xAx * dpr, origin.x * dpr, origin.y * dpr);

      // Helper to draw a ceramic glazed brick with subtle variations, specular highlight, and 3D bevel
      const drawTile = (tx: number, ty: number, tw: number, th: number) => {
        const seed = Math.abs(Math.sin(tx * 12.9898 + ty * 78.233) * 43758.5453);
        const paletteIdx = Math.floor(seed) % greenPalette.length;
        const p = greenPalette[paletteIdx]!;

        const inset = groutWidth / 2;
        const bx = tx + inset;
        const by = ty + inset;
        const bw = tw - groutWidth;
        const bh = th - groutWidth;

        // Base glaze gradient
        const grad = ctx.createLinearGradient(bx, by, bx + bw, by + bh);
        grad.addColorStop(0, p.highlight);
        grad.addColorStop(0.4, p.main);
        grad.addColorStop(1, p.shadow);

        ctx.fillStyle = grad;
        ctx.fillRect(bx, by, bw, bh);

        // Specular sheen / ceramic glaze gloss along top & left edge
        ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
        ctx.fillRect(bx, by, bw, Math.max(1.5, bh * 0.12));
        ctx.fillRect(bx, by, Math.max(1.5, bw * 0.08), bh);

        // Subtle dark bevel shadow along bottom & right edge
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(bx, by + bh - 1.8, bw, 1.8);
        ctx.fillRect(bx + bw - 1.8, by, 1.8, bh);
      };

      // Perfect herringbone lattice iteration (100% gapless tiling)
      for (let y = startY; y < endY; y += 1) {
        for (let x = startX; x < endX; x += 1) {
          if ((((x + y) % 4) + 4) % 4 === 0) {
            // Horizontal tile (2*size by size)
            drawTile(x * size, y * size, size * 2, size);
            x += 2;
            // Vertical tile (size by 2*size)
            drawTile(x * size, y * size, size, size * 2);
            x += 1;
          }
        }
      }

      ctx.restore();
    };

    render();

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};
