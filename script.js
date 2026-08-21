// Re-render Lucide icons after Alpine mounts
document.addEventListener("alpine:initialized", () => {
  if (window.lucide) window.lucide.createIcons();
});
