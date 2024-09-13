export function moveToSection({
  id,
  scrollMarginTop,
}: {
  id: string;
  scrollMarginTop: number;
}) {
  const elem = document.getElementById(id);
  if (elem !== null) {
    elem.style.scrollMarginTop = `${scrollMarginTop}px`;
    elem.scrollIntoView({
      behavior: "smooth",
    });
  }
}
