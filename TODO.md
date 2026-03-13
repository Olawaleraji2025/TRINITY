# TODO List for fixing shp.js Syntax Error

## Task Description
Fix SyntaxError caused by unescaped single quotes in product names being used within inline onClick handlers for wishlist-icon and eye-icon elements.

## Steps Completed:
- [x] Analyze root cause - Single quote character (') breaking JS string interpolation
  
## Steps To Do:
- [ ] Fix displayAllItems() function - escape special chars in EachProductName/price/image before using them inside onClick attributes  
- [ ] Fix eachProductContainer() function - same escaping needed here too
