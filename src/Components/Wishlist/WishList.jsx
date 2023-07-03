import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, selectWishlistItems } from "../../features/slices/WishSlice";
import WishListItem from "./WishListItem";


const Wishlist = () => {
    const wishListItems = useSelector((state)=>state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  // const handleRemoveFromWishlist = (itemId) => {
  //   dispatch(removeFromWishlist(itemId));
  // };

  return (
    <div className="">
      {/* <h1>Wishlist</h1> */}
      {wishListItems.length === 0 ? (
        <p className="text-xl font-bold pt-5">Your wishlist is empty.</p>
      ) : (
        <div className="flex flex-col gap-5">
          {wishListItems.map((item,i) => {
           return (
            <>
                <WishListItem key={i} item={item}/>
            </>
           )
           
          }
          )}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
