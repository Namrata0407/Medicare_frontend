import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  SimpleGrid,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  Divider,
  CloseButton,
  Skeleton,
  SkeletonText,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/Product/action";
import "./Product.css";
import { ProductCard } from "./ProductCard";
import Pagination from "./Pagination";
import { SearchContext } from "../../Context/SearchContext";
import HomeNavbar from "../../components/Navbar/HomeNavbar";
import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar1";
import SearchBar from "../../components/Navbar/SearchBar";
import { FiFilter } from "react-icons/fi";

const Product = () => {
  const { data } = useSelector((state) => state.ProductReducer.products);
  const isLoading = useSelector((state) => state.ProductReducer.isLoading);
  const [age, setAge] = useState("");
  const [range, setRange] = useState("");
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { query } = useContext(SearchContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [discount_lower, setDiscount_lower] = useState(0);
  const [discount_heigher, setDiscount_heigher] = useState(100);
  const [selectedDiscount, setSelectedDiscount] = useState("default");
  const [selectedAge, setSelectedAge] = useState("all");

  const handleSort = (e) => {
    setRange(e.target.value);
    console.log(range);

    // dispatch(getProducts(e.target.value));
  };
  const handleSelect = (e) => {
    setAge(e.target.value);
    setSelectedAge(e.target.value || "all");
  };
  // console.log(data)
  useEffect(() => {
    // if(query){
    //   // let url=`${process.env.REACT_APP_BASEURL}/productPage/search?q=${query}`;
    //   let url=`${process.env.REACT_APP_BASEURL}/productPage?search=${query}`;
    //   let productParams={
    //     params:{
    //       sort:range,
    //       category:age,
    //       page:page||1,
    //       limit:16
    //     }
    //   }
    //     dispatch(getProducts(url,productParams));
    // }else{
    let url = `${process.env.REACT_APP_BASEURL}/productPage`;
    let productParams = {
      params: {
        search: query,
        sort: range,
        category: age,
        page: page || 1,
        limit: 16,
        discount_lower: discount_lower,
        discount_heigher: discount_heigher,
      },
    };
    dispatch(getProducts(url, productParams));
    // }
  }, [range, age, page, query, discount_lower, discount_heigher]);

  // Discount checkbox handler
  const handleDiscountChange = (value) => {
    setSelectedDiscount(value);
    switch (value) {
      case "default":
        setDiscount_lower(0);
        setDiscount_heigher(100);
        break;
      case "lt10":
        setDiscount_lower(0);
        setDiscount_heigher(9);
        break;
      case "10plus":
        setDiscount_lower(10);
        setDiscount_heigher(100);
        break;
      case "20plus":
        setDiscount_lower(20);
        setDiscount_heigher(100);
        break;
      case "30plus":
        setDiscount_lower(30);
        setDiscount_heigher(100);
        break;
      default:
        setDiscount_lower(0);
        setDiscount_heigher(100);
    }
  };

  // Responsive skeleton count
  const skeletonCount = useBreakpointValue({ base: 4, md: 8 });

  return (
    <>
      <Navbar1 />
      <SearchBar />
      <div className="main_container">
        {/* Sidebar for desktop only */}
        <Box
          className="sidebar"
          w={{ base: "100%", md: "30%", lg: "20%" }}
          minW={0}
          h={{ base: "auto", md: "526px" }}
          border={{ base: "none", md: "1px solid gray" }}
          pl={{ base: 2, md: 4 }}
          pr={{ base: 2, md: 0 }}
          mb={{ base: 4, md: 0 }}
          backgroundColor="white"
          style={{ boxSizing: "border-box" }}
          display={{ base: "none", lg: "block" }}
        >
          <Heading
            size="md"
            textAlign="left"
            mt={2}
            fontSize={{ base: "md", md: "lg" }}
          >
            Filters
          </Heading>
          <hr />
          <Heading
            size="md"
            textAlign="left"
            mt={2}
            fontSize={{ base: "md", md: "lg" }}
          >
            Discount
          </Heading>
          <Box mt={4} mb={4}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 4 }}
              alignItems="flex-start"
            >
              <Checkbox
                size={{ base: "sm", md: "md" }}
                width="10rem"
                isChecked={selectedDiscount === "default"}
                onChange={() => handleDiscountChange("default")}
              >
                default
              </Checkbox>
              <Text pr={3} fontSize={{ base: "sm", md: "md" }}>
                52
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 4 }}
              alignItems="flex-start"
            >
              <Checkbox
                size={{ base: "sm", md: "md" }}
                width="10rem"
                isChecked={selectedDiscount === "lt10"}
                onChange={() => handleDiscountChange("lt10")}
              >
                Less than 10%
              </Checkbox>
              <Text pr={3} fontSize={{ base: "sm", md: "md" }}>
                52
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 4 }}
              alignItems="flex-start"
            >
              <Checkbox
                size={{ base: "sm", md: "md" }}
                isChecked={selectedDiscount === "10plus"}
                onChange={() => handleDiscountChange("10plus")}
              >
                10% And Above
              </Checkbox>
              <Text pr={3} fontSize={{ base: "sm", md: "md" }}>
                52
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 4 }}
              alignItems="flex-start"
            >
              <Checkbox
                size={{ base: "sm", md: "md" }}
                isChecked={selectedDiscount === "20plus"}
                onChange={() => handleDiscountChange("20plus")}
              >
                20% And Above
              </Checkbox>
              <Text pr={3} fontSize={{ base: "sm", md: "md" }}>
                52
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 4 }}
              alignItems="flex-start"
            >
              <Checkbox
                size={{ base: "sm", md: "md" }}
                isChecked={selectedDiscount === "30plus"}
                onChange={() => handleDiscountChange("30plus")}
              >
                30% And Above
              </Checkbox>
              <Text pr={3} fontSize={{ base: "sm", md: "md" }}>
                52
              </Text>
            </Stack>
          </Box>
          <hr />
          <Heading
            size="md"
            textAlign="left"
            mt={2}
            fontSize={{ base: "md", md: "lg" }}
          >
            Age
          </Heading>
          <Box mt={4} mb={4}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 4 }}
              alignItems="flex-start"
            >
              <Checkbox
                value=""
                onChange={handleSelect}
                size={{ base: "sm", md: "md" }}
                isChecked={selectedAge === "all"}
              >
                All
              </Checkbox>
              <Text pr={3} fontSize={{ base: "sm", md: "md" }}>
                52
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 4 }}
              alignItems="flex-start"
            >
              <Checkbox
                value="Child"
                onChange={handleSelect}
                size={{ base: "sm", md: "md" }}
                isChecked={selectedAge === "Child"}
              >
                Child
              </Checkbox>
              <Text pr={3} fontSize={{ base: "sm", md: "md" }}>
                52
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 4 }}
              alignItems="flex-start"
            >
              <Checkbox
                value="adult"
                onChange={handleSelect}
                size={{ base: "sm", md: "md" }}
                isChecked={selectedAge === "adult"}
              >
                Adult
              </Checkbox>
              <Text pr={3} fontSize={{ base: "sm", md: "md" }}>
                52
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 4 }}
              alignItems="flex-start"
            >
              <Checkbox
                value="elderly"
                onChange={handleSelect}
                size={{ base: "sm", md: "md" }}
                isChecked={selectedAge === "elderly"}
              >
                Elderly
              </Checkbox>
              <Text pr={3} fontSize={{ base: "sm", md: "md" }}>
                52
              </Text>
            </Stack>
          </Box>
          <hr />
        </Box>
        {/* Drawer for mobile/tablet filters */}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="sm">
          <DrawerOverlay />
          <DrawerContent boxShadow="2xl" borderRadius="md">
            <Flex
              alignItems="center"
              justifyContent="space-between"
              px={4}
              pt={4}
              pb={2}
              borderBottomWidth="1px"
            >
              <DrawerHeader p={0} fontWeight="bold" fontSize="xl">
                Filters
              </DrawerHeader>
              <CloseButton onClick={onClose} size="lg" />
            </Flex>
            <DrawerBody px={6} py={4}>
              <Heading size="sm" mb={2} mt={2} color="teal.600">
                Discount
              </Heading>
              <Divider mb={2} />
              <Stack spacing={3} mb={6}>
                <Flex alignItems="center" justifyContent="space-between">
                  <Checkbox
                    size="md"
                    isChecked={selectedDiscount === "lt10"}
                    onChange={() => handleDiscountChange("lt10")}
                  >
                    Less than 10%
                  </Checkbox>
                  <Text fontSize="sm" color="gray.500">
                    52
                  </Text>
                </Flex>
                <Divider />
                <Flex alignItems="center" justifyContent="space-between">
                  <Checkbox
                    size="md"
                    isChecked={selectedDiscount === "10plus"}
                    onChange={() => handleDiscountChange("10plus")}
                  >
                    10% And Above
                  </Checkbox>
                  <Text fontSize="sm" color="gray.500">
                    52
                  </Text>
                </Flex>
                <Divider />
                <Flex alignItems="center" justifyContent="space-between">
                  <Checkbox
                    size="md"
                    isChecked={selectedDiscount === "20plus"}
                    onChange={() => handleDiscountChange("20plus")}
                  >
                    20% And Above
                  </Checkbox>
                  <Text fontSize="sm" color="gray.500">
                    52
                  </Text>
                </Flex>
                <Divider />
                <Flex alignItems="center" justifyContent="space-between">
                  <Checkbox
                    size="md"
                    isChecked={selectedDiscount === "30plus"}
                    onChange={() => handleDiscountChange("30plus")}
                  >
                    30% And Above
                  </Checkbox>
                  <Text fontSize="sm" color="gray.500">
                    52
                  </Text>
                </Flex>
              </Stack>
              <Heading size="sm" mb={2} mt={2} color="teal.600">
                Age
              </Heading>
              <Divider mb={2} />
              <Stack spacing={3} mb={8}>
                <Flex alignItems="center" justifyContent="space-between">
                  <Checkbox
                    value=""
                    onChange={handleSelect}
                    size="md"
                    isChecked={selectedAge === "all"}
                  >
                    All
                  </Checkbox>
                  <Text fontSize="sm" color="gray.500">
                    52
                  </Text>
                </Flex>
                <Divider />
                <Flex alignItems="center" justifyContent="space-between">
                  <Checkbox
                    value="Child"
                    onChange={handleSelect}
                    size="md"
                    isChecked={selectedAge === "Child"}
                  >
                    Child
                  </Checkbox>
                  <Text fontSize="sm" color="gray.500">
                    52
                  </Text>
                </Flex>
                <Divider />
                <Flex alignItems="center" justifyContent="space-between">
                  <Checkbox
                    value="adult"
                    onChange={handleSelect}
                    size="md"
                    isChecked={selectedAge === "adult"}
                  >
                    Adult
                  </Checkbox>
                  <Text fontSize="sm" color="gray.500">
                    52
                  </Text>
                </Flex>
                <Divider />
                <Flex alignItems="center" justifyContent="space-between">
                  <Checkbox
                    value="elderly"
                    onChange={handleSelect}
                    size="md"
                    isChecked={selectedAge === "elderly"}
                  >
                    Elderly
                  </Checkbox>
                  <Text fontSize="sm" color="gray.500">
                    52
                  </Text>
                </Flex>
              </Stack>
              <Button
                colorScheme="teal"
                w="100%"
                size="lg"
                rounded="full"
                fontWeight="bold"
                mt={4}
                onClick={onClose}
                boxShadow="md"
              >
                Apply Filters
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <div className="product">
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem color="red">
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="red">
              <BreadcrumbLink href="#">Categories</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Vitamins & Nutrition</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading size={{ base: "sm", md: "md", lg: "lg" }} textAlign="left">
            Vitamins & Nutrition
          </Heading>
          <Image
            src="https://onemg.gumlet.io/3e2ea140-5335-41be-9634-ca9abb61867e_1667453850.jpg?w=1062&h=124&format=auto"
            alt="Dan Abramov"
            mt={3}
          />
          <div style={{ padding: "20px" }} className="filter_div">
            <Flex justifyContent={"space-between"} alignItems="center">
              <h1 style={{ fontWeight: "600", fontSize: "20px" }}>
                All Products
              </h1>
              <div>
                <Flex gap={3} alignItems="center">
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "36px",
                      color: "#232323",
                      display: "inline-block",
                    }}
                    className="sort-by-label"
                  >
                    Sort By
                  </span>
                  <select
                    onChange={handleSort}
                    className="sort-by-select"
                    style={{
                      border: "1px solid grey",
                      fontWeight: 600,
                      fontSize: "15px",
                      height: "40px",
                      padding: "0 12px",
                      borderRadius: "8px",
                      color: "#232323",
                      background: "#fff",
                      outline: "none",
                      minWidth: "110px",
                      display: "inline-block",
                    }}
                  >
                    <option value="">Relevance</option>
                    <option value="asc">Price: Low To High</option>
                    <option value="desc">Price: High To Low</option>
                    <option value="rlth">Rating: Low To High</option>
                    <option value="rhtl">Rating: High To Low</option>
                  </select>
                  <Button
                    className="show-filters-btn"
                    leftIcon={<FiFilter />}
                    colorScheme="orange"
                    variant="outline"
                    rounded="full"
                    fontWeight="bold"
                    fontSize={{ base: "13px", md: "15px", lg: "16px" }}
                    height={{ base: "36px", md: "40px", lg: "44px" }}
                    px={{ base: 3, md: 4, lg: 5 }}
                    py={2}
                    alignItems="center"
                    onClick={onOpen}
                    boxShadow="md"
                  >
                    Show Filters
                  </Button>
                </Flex>
              </div>
            </Flex>
          </div>
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 3, lg: 4 }}
            spacing={{ base: "10px", md: "20px" }}
          >
            {isLoading
              ? Array.from({ length: skeletonCount }).map((_, i) => (
                  <Box
                    key={i}
                    className="productCart_container"
                    p={3}
                    borderRadius="md"
                    boxShadow="sm"
                  >
                    <Skeleton
                      height="100px"
                      width="100%"
                      mb={3}
                      borderRadius="md"
                    />
                    <SkeletonText
                      mt="2"
                      noOfLines={2}
                      spacing="2"
                      skeletonHeight="3"
                    />
                    <Skeleton height="20px" width="60%" mt={2} mb={2} />
                    <Skeleton height="30px" width="80%" mt={2} />
                  </Box>
                ))
              : data?.map((item) => {
                  // console.log(item)
                  return <ProductCard key={item._id} product={item} />;
                })}
          </SimpleGrid>
          {/* <div style={{display:'flex',marginTop:'20px',gap:'10px',justifyContent:'center',alignItems:'center'}}>
          <Button disabled={page===1} onClick={()=>setPage(prev=>prev-1)}>PREV</Button>
          <Button>{page}</Button>
          <Button onClick={()=>setPage(prev=>prev+1)}>NEXT</Button>
        </div> */}
          <Pagination current={page} onChange={(page) => setPage(page)} />
        </div>
      </div>
      <Footer />
    </>
    // <Flex p={5}>
    // <Box w="20%" h="500px" border="1px solid black" pl={4} backgroundColor='white'>
    //   <Heading size="md" textAlign="left">
    //     Filters
    //   </Heading>
    //   <hr />
    //   <Heading size="md" textAlign="left">
    //     Discount
    //   </Heading>
    //   <Box mt={4} mb={4}>
    //     <Stack direction="row">
    //       <Checkbox>Less than 10%</Checkbox>
    //       <Spacer></Spacer>
    //       <Text pr={3}>52</Text>
    //     </Stack>
    //     <Stack spacing={20} direction="row">
    //       <Checkbox>10% And Above</Checkbox>
    //       <Text>52</Text>
    //     </Stack>
    //     <Stack spacing={20} direction="row">
    //       <Checkbox>20% And Above</Checkbox>
    //       <Text>52</Text>
    //     </Stack>
    //     <Stack spacing={20} direction="row">
    //       <Checkbox>30% And Above</Checkbox>
    //       <Text>52</Text>
    //     </Stack>
    //   </Box>
    //   <hr />
    //   <Heading size="md" textAlign="left">
    //     Age
    //   </Heading>
    //   <Box mt={4} mb={4}>
    //     <Stack direction="row">
    //       <Checkbox>All</Checkbox>
    //       <Spacer></Spacer>
    //       <Text pr={3}>52</Text>
    //     </Stack>
    //     <Stack direction="row">
    //       <Checkbox>Child</Checkbox>
    //       <Spacer></Spacer>
    //       <Text pr={3}>52</Text>
    //     </Stack>
    //     <Stack direction="row">
    //       <Checkbox>Adult</Checkbox>
    //       <Spacer></Spacer>
    //       <Text pr={3}>52</Text>
    //     </Stack>
    //     <Stack direction="row">
    //       <Checkbox>Elderly</Checkbox>
    //       <Spacer></Spacer>
    //       <Text pr={3}>52</Text>
    //     </Stack>
    //   </Box>
    //   <hr />
    // </Box>
    //   <Box w="80%" h="auto" border="1px solid black" p={5}>
    //     <h1>Products</h1>
    // <Breadcrumb
    //   spacing="8px"
    //   separator={<ChevronRightIcon color="gray.500" />}
    // >
    //   <BreadcrumbItem color="red">
    //     <BreadcrumbLink href="#">Home</BreadcrumbLink>
    //   </BreadcrumbItem>

    //   <BreadcrumbItem color="red">
    //     <BreadcrumbLink href="#">Categories</BreadcrumbLink>
    //   </BreadcrumbItem>

    //   <BreadcrumbItem isCurrentPage>
    //     <BreadcrumbLink href="#">Vitamins & Nutrition</BreadcrumbLink>
    //   </BreadcrumbItem>
    // </Breadcrumb>
    // <Heading size="lg" textAlign="left">
    //   Vitamins & Nutrition
    // </Heading>
    // <Image
    //   src="https://onemg.gumlet.io/3e2ea140-5335-41be-9634-ca9abb61867e_1667453850.jpg?w=1062&h=124&format=auto"
    //   alt="Dan Abramov"
    //   mt={3}
    // />
    //     <Box border="1px solid red" mt={5} backgroundColor='white'>
    //       <Flex>
    //         <Heading size="md">All Products</Heading>
    //         <Spacer />
    //         <HStack>
    //           <Box>
    //             <Text>Sort By</Text>
    //           </Box>
    //           <Box>
    //             <Select placeholder="Select option">
    //               <option value="option1">Option 1</option>
    //               <option value="option2">Option 2</option>
    //               <option value="option3">Option 3</option>
    //             </Select>
    //           </Box>
    //         </HStack>
    //       </Flex>
    //       <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={5}>
    //         {data.map(
    //           (product) => (
    //             <Box p={3} border="1px">
    //               <Box border="1px" pt={6} pb={6}>
    //                 <Center>
    //                   <Image src={product.image_url} alt="product_pic" />
    //                 </Center>
    //               </Box>
    //               <Text textAlign="left" fontWeight='bold'>
    //                 {product.product_title}
    //               </Text>
    //               <Text textAlign="left" fontSize='xs'>{product.pack_size}</Text>
    //               <HStack>
    //                 <Badge variant='solid' colorScheme='green'>
    //                   {product.avg_rating}
    //                   {product.avg_rating !== "" ? (
    //                     <StarIcon color="white" />
    //                   ) : (
    //                     ""
    //                   )}
    //                 </Badge>
    //                 <Text>{product.total_ratings}</Text>
    //               </HStack>
    //               <Flex alignItems="flex-start">
    //                 {product.discount !== "" ? (
    //                   <Flex direction='column'>
    //                     <HStack>
    //                       <Text color='gray'>MRP</Text>
    //                       <strike color='gray'>₹{product.MRP}</strike>
    //                       <Text color='green.700'>{product.discount}</Text>
    //                     </HStack>
    //                     <Text textAlign='left'>₹{product.final_price}</Text>
    //                   </Flex>
    //                 ) : (
    //                   <Flex><Text color='gray'>MRP</Text> ₹{product.final_price}</Flex>
    //                 )}
    //                 <Spacer></Spacer>
    //                 <Box>
    //                   <Button>ADD</Button>
    //                 </Box>
    //               </Flex>
    //             </Box>
    //           )
    //           // <img src={product.image_url} alt="product_pic"/>
    //           // <h4>{product.product_title}</h4>
    //           // <p>{product.pack_size}</p>
    //         )}
    //       </Grid>
    //     </Box>
    //   </Box>
    // </Flex>
  );
};

export default Product;

//const data = await ProductPageModel.find( {$regex: req.obj.q, $options: 'i'  }).skip(skip).limit(limit).sort(sorting)
