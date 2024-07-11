import React, { useState } from 'react';
import { addNewPart } from '../../api/firebase';
import { uploadImage } from '../../api/uploader';
import Button from '../../components/ui/Button';

export default function PartsNew() {
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


    const INPUT_CSS = 'bg-gray-110 p-3 outline-none border border-gray-300 my-1'
    
    return (<>
        console.log(categories)
        <section className='w-full text-center'>
            <h2 className='text-2xl font-bold my-4'>새로운 부속 등록</h2>
            {partImgFile && <img className='w-96 mx-auto mb-2' src={URL.createObjectURL(partImgFile)} alt='local file' />}
            <form className='flex flex-col grid px-12' onSubmit={handleSubmit}>
                <label className='bg-gray-110 p-3 outline-none my-1'>부품 이미지 파일</label>
                <input 
                    className={INPUT_CSS}
                    type='file' 
                    accept='image/*' 
                    name='partImgFile' 
                    onChange={handleChangePartImgFile} 
                />
                <input 
                    className={INPUT_CSS}
                    type='text'
                    name='partNumberManufacturer'
                    value={part.partNumberManufacturer ?? ''}
                    placeholder='partNumber manufacturer'
                    onChange={handleChange}
                />
                <input 
                    className={INPUT_CSS}
                    type='text'
                    name='partNumberDON1eng'
                    value={part.partNumberDON1eng ?? ''}
                    placeholder='partNumber DON1eng'
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
                    <option value='MOtor'>MOtor</option>
                    <option value='SwitchButton'>SwitchButton</option>
                    <option value='SenserWarning'>SenserWarning</option>
                    <option value='Compressor'>Compressor</option>
                    <option value='AC'>AC</option>
                    <option value='Bearing'>Bearing</option>
                    <option value='Sealing'>Sealing</option>
                    <option value='etc'>etc</option>
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
                    name='modelNumber'
                    value={part.modelNumber ?? ''}
                    placeholder='Model Number'
                    onChange={handleChange}
                />
                <input 
                    className={INPUT_CSS}
                    type='text'
                    name='manufacturer'
                    value={part.manufacturer ?? ''}
                    placeholder='Manufacturer'
                    onChange={handleChange}
                />
                <input 
                    className={INPUT_CSS}
                    type='text'
                    name='usePosition'
                    value={part.usePosition ?? ''}
                    placeholder='사용처'
                    onChange={handleChange}
                />
                <input 
                    className={INPUT_CSS}
                    type='text'
                    name='size'
                    value={part.size ?? ''}
                    placeholder='Size'
                    onChange={handleChange}
                />
                <input 
                    className={INPUT_CSS}
                    type='number'
                    name='needQty'
                    value={part.needQty ?? ''}
                    placeholder='필요수량'
                    onChange={handleChange}
                />
                <input 
                    className={INPUT_CSS}
                    type='number'
                    name='recommendedReplacementCycle'
                    value={part.recommendedReplacementCycle ?? ''}
                    placeholder='사용연한'
                    onChange={handleChange}
                />
                <label className='bg-gray-110 p-3 outline-none my-1'>바코드</label>
                {barcodeImgFile && <img src={URL.createObjectURL(barcodeImgFile)} alt='barcodeImg local file' />}
                <input 
                    className={INPUT_CSS}
                    type='file' 
                    accept='image/*' 
                    name='barcodeImgFile' 
                    required
                    onChange={handleChangeBarcodeImgFile} 
                />
                <label className='bg-gray-110 p-3 outline-none my-1'>사용 위치 사진 01</label>
                {position01ImgFile && <img src={URL.createObjectURL(position01ImgFile)} alt='position01Img local file' />}
                <input 
                    className={INPUT_CSS}
                    type='file' 
                    accept='image/*' 
                    name='position01ImgFile'
                    onChange={handleChangePosition01ImgFile} 
                />
                <label className='bg-gray-110 p-3 outline-none my-1'>사용 위치 사진 02</label>
                {position02ImgFile && <img src={URL.createObjectURL(position02ImgFile)} alt='position02Img local file' />}
                <input 
                    className={INPUT_CSS}
                    type='file' 
                    accept='image/*' 
                    name='position02ImgFile' 
                    onChange={handleChangePosition02ImgFile} 
                />                
                <input 
                    className={INPUT_CSS}
                    type='number'
                    name='price'
                    value={part.price ?? ''}
                    placeholder='가격'
                    onChange={handleChange}
                />
                <textarea 
                    className={INPUT_CSS}
                    name='description'
                    value={part.description ?? ''}
                    placeholder='사용설명'
                    rows={4}
                    cols={40}
                    onChange={handleChange}
                />
                <textarea 
                    className={INPUT_CSS}
                    name='note'
                    value={part.note ?? ''}
                    placeholder='메모'
                    rows={4}
                    cols={40}
                    onChange={handleChange}
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
        </>
    );
}

