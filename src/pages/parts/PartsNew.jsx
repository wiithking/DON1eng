import React, { useState } from 'react';
import { addNewPart } from '../../api/firebase';
import { uploadImage } from '../../api/uploader';
// import Button from '../../components/ui/Button';
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Select, Textarea, useToast } from '@chakra-ui/react';
import { Form, useNavigate } from 'react-router-dom';

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
    // const [success, setSuccess] =useState();
    const toast = useToast();
    const navigate = useNavigate()

    const showToast = () => {
        toast({
            title: 'Success!',
            description: '성공적으로 추가되었습니다!',
            duration: 4000,
            isClosable: true,
            position: 'bottom'
        })
    }

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
                console.log(partImgFile)
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
            //.finally( () => setIsUploading(false) );
            
            addNewPart(part, partImgURL, position01ImgURL, position02ImgURL, barcodeImgURL);
            showToast();
            console.log(partImgURL, position01ImgURL, position02ImgURL, barcodeImgURL);
            navigate('/partsviewcard')
        };
        
        
        // const INPUT_CSS = 'bg-gray-110 p-3 outline-none border border-gray-300 my-1'

        

        
    return (
        <Box>
            <h2 className='text-2xl font-bold my-4'>새로운 부품 등록</h2>
            <Form onSubmit={handleSubmit}>
                {/* {setPartImgFile(part.partImgURL)}         */}
                {partImgFile && <img className='w-96 mx-auto mb-2' src={URL.createObjectURL(partImgFile)} alt='local file' />}
                <FormControl pb="40px">
                    <FormLabel>부품 이미지</FormLabel>
                    <Input 
                        type="file" 
                        name="partImgFile" 
                        accept='image/*' 
                        variant='flushed'
                        size='md'
                        onChange={handleChangePartImgFile} 
                        />
                    <FormHelperText>부품의 이미지를 선택해 주세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Input 
                        type="text" 
                        name="partNumberManufacturer"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.partNumberManufacturer ?? ''}
                        placeholder='제조사 부품번호'
                        onChange={handleChange}
                        />
                    <FormHelperText color='gray.400'>제조사에서 부여한 부품번호를 입력해 주세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Input 
                        type="text" 
                        name="partNumberDON1eng"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.partNumberDON1eng ?? ''}
                        placeholder='DON1 부품번호'
                        onChange={handleChange}
                        />
                    <FormHelperText color='gray.400'>DON1 센터에서 부여한 부품관리 번호를 입력해 주세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Select
                        name='category'
                        size='lg'
                        bg='white'
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
                    </Select>
                    <FormHelperText color='gray.400'>부품 카테고리를 선택하세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Select
                        name='autobagModel'
                        size='lg'
                        bg='white'
                        onChange={handleChange}
                        >
                        <option value=''>--- autobagModel ---</option>
                        <option value='Common'>Common</option>
                        <option value='BL-Line'>BL-Line</option>
                        <option value='BL-P505S'>BL-P505S</option>
                        <option value='BL-P506S'>BL-P506S</option>
                        <option value='BL-P506S+'>BL-P506S+</option>
                        <option value='PACKI-600'>PACKI-600</option>
                        <option value='DH'>DH</option>
                    </Select>
                    <FormHelperText color='gray.400'>부품이 사용되는 오토백 기계 모델을 선택하세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Input 
                        type="text" 
                        name="partNameEng"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.partNameEng ?? ''}
                        placeholder='부품이름(Eng)'
                        onChange={handleChange}
                        />
                    <FormHelperText color='gray.400'>부품의 영문이름을 입력해 주세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Input 
                        type="text" 
                        name="partNameKor"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.partNameKor ?? ''}
                        placeholder='부품이름(kor)'
                        onChange={handleChange}
                        />
                    <FormHelperText color='gray.400'>부품의 한글이름을 입력해 주세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Input 
                        type="text" 
                        name="manufacturer"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.manufacturer ?? ''}
                        placeholder='제조사명'
                        onChange={handleChange}
                        />
                    <FormHelperText color='gray.400'>제조사명을 입력하세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Input 
                        type="text" 
                        name="modelNumber"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.modelNumber ?? ''}
                        placeholder='부품 모델번호'
                        onChange={handleChange}
                        />
                    <FormHelperText color='gray.400'>부품의 모델번호를 입력해 주세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Input 
                        type="text" 
                        name="usePosition"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.usePosition ?? ''}
                        placeholder='부품의 사용 위치'
                        onChange={handleChange}
                        />
                    <FormHelperText color='gray.400'>부품이 사용되는 위치를 입력해 주세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Input 
                        type="text" 
                        name="size"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.size ?? ''}
                        placeholder='부품 size'
                        onChange={handleChange}
                        />
                    <FormHelperText color='gray.400'>부품의 사이즈를 입력해 주세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Input 
                        type="number" 
                        name="needQty"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.needQty ?? ''}
                        placeholder='필요 수량'
                        onChange={handleChange}
                        />
                    <FormHelperText color='gray.400'>기계에 들어가는 부품의 수량을 입력해 주세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Input 
                        type="number" 
                        name="recommendedReplacementCycle"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.recommendedReplacementCycle ?? ''}
                        placeholder='사용연한'
                        onChange={handleChange}
                        />
                    <FormHelperText color='gray.400'>부품의 사용연한(부품의 적정 교체시기)를 입력해 주세요.</FormHelperText>
                </FormControl>
                <FormControl py="40px">
                    <FormLabel>사용 위치 사진 (1/2)</FormLabel>
                    {/* {setPosition01ImgFile(part.position01ImgURL)}  */}
                    {position01ImgFile && <img src={URL.createObjectURL(position01ImgFile)} alt='position01Img local file' />}
                    <Input 
                        type="file" 
                        name="position01ImgFile" 
                        accept='image/*' 
                        variant='flushed'
                        size='md'
                        onChange={handleChangePosition01ImgFile} 
                        />
                    <FormHelperText>부품이 사용되는 위치 사진을 입력하세요(1/2).</FormHelperText>
                </FormControl>
                <FormControl py="40px">
                    <FormLabel>사용 위치 사진 (2/2)</FormLabel>
                    {/* {setPosition02ImgFile(part.position02ImgURL)} */}
                    {position02ImgFile && <img src={URL.createObjectURL(position02ImgFile)} alt='position01Img local file' />}
                    <Input 
                        type="file" 
                        name="position02ImgFile" 
                        accept='image/*' 
                        variant='flushed'
                        size='md'
                        onChange={handleChangePosition02ImgFile} 
                        />
                    <FormHelperText>부품이 사용되는 위치 사진을 입력하세요(2/2).</FormHelperText>
                </FormControl>
                <FormControl py="40px">
                    <FormLabel>바코드</FormLabel>
                    {/* {setBarcodeImgFile(part.barcodeImgURL)} */}
                    {barcodeImgFile && <img src={URL.createObjectURL(barcodeImgFile)} alt='position01Img local file' />}
                    <Input 
                        type="file" 
                        name="barcodeImgFile" 
                        accept='image/*' 
                        variant='flushed'
                        size='md'
                        onChange={handleChangeBarcodeImgFile} 
                        />
                    <FormHelperText>바코드 사진을 선택하세요!</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <Input 
                        type="number" 
                        name="price"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.price ?? ''}
                        placeholder='가격'
                        onChange={handleChange}
                        />
                    <FormHelperText color='gray.400'>부품의 가격을 입력해 주세요.</FormHelperText>
                </FormControl>
                <FormControl pb='30px'>
                    <FormLabel>부품에 대한 설명</FormLabel>
                    <Textarea 
                        name="description"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.description ?? ''}
                        placeholder='사용설명'
                        onChange={handleChange}
                        />
                </FormControl>
                <FormControl pb='30px'>
                    <FormLabel>메모</FormLabel>
                    <Textarea 
                        name="note"
                        variant='outline'
                        size='lg'
                        bg='white'
                        value={part.note ?? ''}
                        placeholder='기타 메모'
                        onChange={handleChange}
                        />
                </FormControl>
                
                {/* {success && <p className='my-2'>🛜 {success}</p>} */}

                <Button 
                    w='full'
                    h='80px'
                    colorScheme='purple'
                    disabled={isUploading} 
                    type='submit' 
                    >
                    {isUploading ? '업로드 중...' : '제품 등록하기'}
                </Button>
            </Form>
        </Box>
    );
}

