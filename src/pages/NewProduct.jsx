import React, { useState } from 'react';
import { writeUserData } from '../api/firebase';
import { uploadImage } from '../api/uploader';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState();

  const onClick = () => {};
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    uploadImage(file) //
      .then((url) => {
        writeUserData(product, url);
      })
      .then(() => {
        setSuccess('성공적으로 제품이 추가 되었습니다.');
        setTimeout(() => {
          setSuccess(null);
        }, 4000);
      })
      .finally(() => {
        setIsLoading(false);
        setProduct({});
        setFile();
      });
  };
  return (
    <main>
      <section className="product__new">
        <div className="product__title flex content-center flex-col h-20">
          <h2 className="text-center text-2xl">제품 등록 하기</h2>
          {success && <p className="text-center text-sm mt-1">✅ {success}</p>}
        </div>

        {file && (
          <img
            className="w-96 text-center mx-auto"
            src={URL.createObjectURL(file)}
            alt="local file"
          />
        )}
        <form className="form__area" onSubmit={handleSubmit}>
          <div className="form__wrap file">
            <label htmlFor="file">업로드</label>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form__wrap">
            <input
              type="text"
              id="title"
              name="title"
              value={product.title ?? ''}
              placeholder="제품명을 입력해 주세요"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form__wrap">
            <input
              type="number"
              id="price"
              name="price"
              value={product.price ?? ''}
              placeholder="가격을 입력해 주세요"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form__wrap">
            <input
              type="text"
              id="color"
              name="color"
              value={product.color ?? ''}
              placeholder="색상을 입력해 주세요"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form__wrap">
            <input
              type="text"
              id="discription"
              name="discription"
              value={product.discription ?? ''}
              placeholder="제품 한 줄 설명을 입력해주세요"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form__wrap">
            <input
              type="text"
              id="options"
              name="options"
              value={product.options ?? ''}
              placeholder="옵션을 입력해 주세요"
              required
              onChange={handleChange}
            />
          </div>
          <button
            className="btn__submit"
            onClick={onClick}
            disabled={isLoading}
          >
            {isLoading ? '제품 등록중...' : '등록하기'}
          </button>
        </form>
      </section>
    </main>
  );
}
