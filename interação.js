function onExit(textbox) {
    if (!String(textbox.value || '').length) {
      textbox.value = 'Preencha esse campo!'
      textbox.style.color = 'red'
    } else if (String(textBox.value || '').includes('Preencha esse campo!')) {
      textbox.value = ''
      textbox.style.color = 'white'
    }
  }

  function onFocus(textBox) {
    if (String(textBox.value || '').includes('Preencha esse campo!')) {
      textBox.value = ''
      textBox.style.color = 'white'
    }
  }

  