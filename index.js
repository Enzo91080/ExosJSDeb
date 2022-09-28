const calcul = (nombre1, nombre2) => {
  return new Promise((resolve, reject) => {
    // ...

    const result = nombre1 + nombre2;
    if (result > 20) {
      //
      setTimeout(
        () => resolve("Votre nombre est très grand : " + nombre2),
        3000
      );
    } else {
      reject("Votre nombre est petit");
    }
  });
};

// Lorsque c'est bon ! Then fais référence à la fonction de callback

calcul(10, 18)
  .then((result) => {
    console.log("Résultat:" + result);
  })
  .then((result) => {
    console.log("Second Then");
  })
  .catch((err) => {
    console.log("Error " + err);
  });
