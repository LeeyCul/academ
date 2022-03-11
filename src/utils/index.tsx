export const scrollToAnchor = (id: string) => {
  if (!id) return console.warn('id不存在')
  let anchorElement = document.getElementById(id);
  if (anchorElement) {
    anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
}
