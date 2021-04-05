import { useState, useEffect } from "react";

export function useImage() {
  const [image, setImage] = useState({
    url: "",
    alt: "",
  });

  useEffect(() => {
    async function fetchImage() {
      const resp = await fetch(
        "https://api.unsplash.com//photos/random/?orientation=portrait&client_id=OViE4o_VP_cPpcKsTxfJKknhZOaZLyNTp0CUXpQszgk"
      );
      const data = await resp.json();
      setImage({
        url: data.urls.regular,
        alt: data.alt_description,
      });
    }
    fetchImage();
  }, []);

  return image;
}
