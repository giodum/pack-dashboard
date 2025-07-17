<div
  class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-white/80"
>
  <svg viewBox="25 25 50 50">
    <circle r="20" cy="50" cx="50"></circle>
  </svg>
</div>

<style>
  svg {
    transform-origin: center;
    animation: rotate4 2s linear infinite;
    width: 4rem;
  }

  circle {
    animation: dash4 1.5s ease-in-out infinite;
    fill: none;
    stroke: var(--color-coral-500);
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    stroke-width: 4;
  }

  @keyframes rotate4 {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash4 {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
</style>
