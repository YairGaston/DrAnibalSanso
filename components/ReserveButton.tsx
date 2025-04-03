"use client";

export default function ReserveButton() {
  const handleClick = () => {
    const element = document.getElementById("ubicaciones");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className="button button-white button-lg"
      onClick={handleClick}
      aria-label="Reservar turno médico"
    >
      Reservar Turno
    </button>
  );
}