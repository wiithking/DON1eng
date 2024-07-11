import React, { useState } from 'react';
import { addNewPart, categoryNames } from '../../api/firebase';
import { uploadImage } from '../../api/uploader';
import Button from '../../components/ui/Button';

export default function InputParts(subject, isPartNew, ) {
    const [part, setPart] = useState({});
    const [partImgFile, setPartImgFile] = useState();
    const [position01ImgFile, setPosition01ImgFile] = useState();
    const [position02ImgFile, setPosition02ImgFile] = useState();
    const [barcodeImgFile, setBarcodeImgFile] = useState();

    const [partImgURL, setPartImgURL] = useState('');
    const [position01ImgURL, setPosition01ImgURL] = useState('');
    const [position02ImgURL, setPosition02ImgURL] = useState('');
    const [barcodeImgURL, setBarcodeImgURL] = useState('');

    const [isUploading, setIsUploading] = useState(false);
    const [sucess, setSucess] =useState();

    const handleChangePartImgFile = (e) => {
        const {files} =e.target;
        setPartImgFile(files && files[0]);
        return;
    };
    const handleChangePosition01ImgFile = (e) => {
        const {files} =e.target;
        setPosition01ImgFile(files && files[0]);
        return;
    };
    const handleChangePosition02ImgFile = (e) => {
        const {files} =e.target;
        setPosition02ImgFile(files && files[0]);
        return;
    };
    
    const handleChangeBarcodeImgFile = (e) => {
        const {files} =e.target;
        setBarcodeImgFile(files && files[0]);
        return;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPart((part) => ({ ...part, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUploading(true);

        uploadImage(partImgFile)
            .then(url => {
                setPartImgURL(url);
            });
        uploadImage(position01ImgFile)
            .then(url => {
                setPosition01ImgURL(url);
            });
        uploadImage(position02ImgFile)
            .then(url => {
                setPosition02ImgURL(url);
            });
        uploadImage(barcodeImgFile)
            .then(url => {
                setBarcodeImgURL(url);
            })
        .finally( () => setIsUploading(false) );
        
        addNewPart(part, partImgURL, position01ImgURL, position02ImgURL, barcodeImgURL)
            .then( () => {
                setSucess('성공적으로 부속이 등록되었습니다.');
                setTimeout( () => {
                    setSucess(null);
                }, 4000);
            });
    };

    const categories = categoryNames();
    console.log(categories);
    const INPUT_CSS = 'bg-brnad p-3 outline-none border border-gray-300 my-1'
    return (
        <section className='w-full text-center'>
            <h2 className='text-2xl font-bold my-4'>새로운 부속 등록</h2>
            {partImgFile && <img className='w-96 mx-auto mb-2' src={URL.createObjectURL(partImgFile)} alt='local file' />}
            <form className='flex flex-col grid px-12' onSubmit={handleSubmit}>
                <input 
                    className={INPUT_CSS}
                    type='file' 
                    accept='image/*' 
                    name='partImgFile' 
                    required
                    onChange={handleChangePartImgFile} 
                />
                <input 
                    className={INPUT_CSS}
                    type='text'
                    name='partNumber'
                    value={part.partNumber ?? ''}
                    placeholder='Part Number'
                    required
                    onChange={handleChange}
                />
                <select 
                    className={INPUT_CSS}
                    name='category' 
                    required 
                    onChange={handleChange}
                >
                    <option value=''>--- category ---</option>
                    <option value='Printer'>Printer</option>
                    <option value='SideConveyor'>SideConveyor</option>
                    <option value='FrontConveyor'>FrontConveyor</option>
                    <option value='Air'>Air</option>
                    <option value='Motor'>Motor</option>
                    <option value='SwitchButton'>SwitchButton</option>
                    <option value='SenserWarning'>SenserWarning</option>
                    <option value='Compressor'>Compressor</option>
                    <option value='AC'>AC</option>
                    <option value='Bearing'>Bearing</option>
                    <option value='Sealing'>Sealing</option>
                    <option value='Etc'>Etc</option>
                </select>
                <select 
                    className={INPUT_CSS}
                    name='autobagModel' 
                    required 
                    onChange={handleChange}
                >
                    <option value=''>--- autobagModel ---</option>
                    <option value='Common'>Common</option>
                    <option value='BL-Line'>BL-Line</option>
                    <option value='BL-P505S'>BL-P505S</option>
                    <option value='BL-P605S'>BL-P605S</option>
                    <option value='BL-P705S'>BL-P705S</option>
                    <option value='DH'>DH</option>
                </select>
                <input 
                    className={INPUT_CSS}
                    type='text'
                    name='partNameEng'
                    value={part.partNameEng ?? ''}
                    placeholder='Part Name Eng'
                    required
                    onChange={handleChange}
                />
                <input 
                    className={INPUT_CSS}
                    type='text'
                    name='partNameKor'
                    value={part.partNameKor ?? ''}
                    placeholder='Part Name Kor'
                    required
                    onChange={handleChange}
                />
                <input 
                    className={INPUT_CSS}
                    type='text'
                    name='usePosition'
                    value={part.usePosition ?? ''}
                    placeholder='사용처'
                    required
                    onChange={handleChange}
                />
                <input 
                    className={INPUT_CSS}
                    type='text'
                    name='size'
                    value={part.size ?? ''}
                    placeholder='Size'
                    required
                    onChange={handleChange}
                />
                <input 
                    className={INPUT_CSS}
                    type='number'
                    name='price'
                    value={part.price ?? ''}
                    placeholder='가격'
                    required
                    onChange={handleChange}
                />
                <input 
                    className={INPUT_CSS}
                    type='number'
                    name='needQty'
                    value={part.needQty ?? ''}
                    placeholder='필요수량'
                    required
                    onChange={handleChange}
                />
                <input 
                    className={INPUT_CSS}
                    type='number'
                    name='recommendedReplacementCycle'
                    value={part.recommendedReplacementCycle ?? ''}
                    placeholder='사용연한'
                    required
                    onChange={handleChange}
                />
                <textarea 
                    className={INPUT_CSS}
                    name='description'
                    value={part.description ?? ''}
                    placeholder='사용설명'
                    rows={4}
                    cols={40}
                    required
                    onChange={handleChange}
                />
                <textarea 
                    className={INPUT_CSS}
                    name='note'
                    value={part.note ?? ''}
                    placeholder='메모'
                    rows={4}
                    cols={40}
                    required
                    onChange={handleChange}
                />
                {barcodeImgFile && <img src={URL.createObjectURL(barcodeImgFile)} alt='barcodeImg local file' />}
                <input 
                    className={INPUT_CSS}
                    type='file' 
                    accept='image/*' 
                    name='barcodeImgFile' 
                    required
                    onChange={handleChangeBarcodeImgFile} 
                />
                {position01ImgFile && <img src={URL.createObjectURL(position01ImgFile)} alt='position01Img local file' />}
                <input 
                    className={INPUT_CSS}
                    type='file' 
                    accept='image/*' 
                    name='position01ImgFile' 
                    required
                    onChange={handleChangePosition01ImgFile} 
                />
                {position02ImgFile && <img src={URL.createObjectURL(position02ImgFile)} alt='position02Img local file' />}
                <input 
                    className={INPUT_CSS}
                    type='file' 
                    accept='image/*' 
                    name='position02ImgFile' 
                    required
                    onChange={handleChangePosition02ImgFile} 
                />
                {sucess && <p className='my-2'>🛜 {sucess}</p>}
                <Button 
                    text={isUploading ? '업로드 중...' : '제품 등록하기'}
                    cssTextColor={'text-white'} 
                    cssBgColor={'bg-brand'} 
                    cssPadding={'py-2 px-4'} 
                    cssRounded={'rounded-lg'} 
                    fontSizer={'text-1xl'}
                    disabled={isUploading} 
                />
            </form>
        </section>
    );
}

