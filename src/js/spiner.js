export const getSpinner = () => {
    const spinner = document.createElement('div');
    spinner.className = "orbit-spinner"

    spinner.innerHTML = `
  <div class="orbit"></div>
  <div class="orbit"></div>
  <div class="orbit"></div>
`;
    return spinner;
};