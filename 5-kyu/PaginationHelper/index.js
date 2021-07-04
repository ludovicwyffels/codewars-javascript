/*
  Title:
    PaginationHelper
  Description:
    For this exercise you will be strengthening your page-fu mastery.  You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
    The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
    The following are some examples of how this class is used:
    var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
    helper.pageCount(); //should == 2
    helper.itemCount(); //should == 6
    helper.pageItemCount(0); //should == 4
    helper.pageItemCount(1); // last page - should == 2
    helper.pageItemCount(2); // should == -1 since the page is invalid

    // pageIndex takes an item index and returns the page that it belongs on
    helper.pageIndex(5); //should == 1 (zero based index)
    helper.pageIndex(2); //should == 0
    helper.pageIndex(20); //should == -1
    helper.pageIndex(-10); //should == -1

    helper = PaginationHelper(Char).new(['a','b','c','d','e','f'], 4);
    helper.page_count() # should == 2
    helper.item_count() # should == 6
    helper.page_item_count(0) # should == 4
    helper.page_item_count(1) # last page - should == 2
    helper.page_item_count(2) # should == -1 since the page is invalid

    # pageIndex takes an item index and returns the page that it belongs on
    helper.page_index(5) # should == 1 (zero based index)
    helper.page_index(2) # should == 0
    helper.page_index(20) # should == -1
    helper.page_index(-10) # should == -1

    PaginationHelper<Character> helper = new PaginationHelper(Arrays.asList('a', 'b', 'c', 'd', 'e', 'f'), 4);
    helper.pageCount(); //should == 2
    helper.itemCount(); //should == 6
    helper.pageItemCount(0); //should == 4
    helper.pageItemCount(1); // last page - should == 2
    helper.pageItemCount(2); // should == -1 since the page is invalid

    // pageIndex takes an item index and returns the page that it belongs on
    helper.pageIndex(5); //should == 1 (zero based index)
    helper.pageIndex(2); //should == 0
    helper.pageIndex(20); //should == -1
    helper.pageIndex(-10); //should == -1

    helper = new PaginationHelper(['a','b','c','d','e','f'], 4)
    helper.pageCount() # should == 2
    helper.itemCount() # should == 6
    helper.pageItemCount(0)  # should == 4
    helper.pageItemCount(1) # last page - should == 2
    helper.pageItemCount(2) # should == -1 since the page is invalid

    # pageIndex takes an item index and returns the page that it belongs on
    helper.pageIndex(5) # should == 1 (zero based index)
    helper.pageIndex(2) # should == 0
    helper.pageIndex(20) # should == -1
    helper.pageIndex(-10) # should == -1

    helper = PaginationHelper.new(['a','b','c','d','e','f'], 4)
    helper.page_count() # should == 2
    helper.item_count() # should == 6
    helper.page_item_count(0)  # should == 4
    helper.page_item_count(1) # last page - should == 2
    helper.page_item_count(2) # should == -1 since the page is invalid

    # page_index takes an item index and returns the page that it belongs on
    helper.page_index(5) # should == 1 (zero based index)
    helper.page_index(2) # should == 0
    helper.page_index(20) # should == -1
    helper.page_index(-10) # should == -1 because negative indexes are invalid

    collection   = ['a','b','c','d','e','f']
    itemsPerPage = 4

    pageCount collection itemsPerPage       `shouldBe` 2
    itemCount collection itemsPerPage       `shouldBe` 6

    pageItemCount collection itemsPerPage 0 `shouldBe` Just 4 -- four of six items
    pageItemCount collection itemsPerPage 1 `shouldBe` Just 2 -- the last two items
    pageItemCount collection itemsPerPage 3 `shouldBe` Nothing -- page doesn't exist

    pageIndex collection itemsPerPage  0    `shouldBe` Just 0 -- zero based index
    pageIndex collection itemsPerPage  5    `shouldBe` Just 1
    pageIndex collection itemsPerPage 20    `shouldBe` Nothing
    pageIndex collection itemsPerPage (-20) `shouldBe` Nothing

    helper = PaginationHelper(['a','b','c','d','e','f'], 4)
    helper.page_count() # should == 2
    helper.item_count() # should == 6
    helper.page_item_count(0)  # should == 4
    helper.page_item_count(1) # last page - should == 2
    helper.page_item_count(2) # should == -1 since the page is invalid

    # page_index takes an item index and returns the page that it belongs on
    helper.page_index(5) # should == 1 (zero based index)
    helper.page_index(2) # should == 0
    helper.page_index(20) # should == -1
    helper.page_index(-10) # should == -1 because negative indexes are invalid

    var helper = new PaginationHelper<char>(new List<char>{'a', 'b', 'c', 'd', 'e', 'f'}, 4);
    helper.PageCount(); //should == 2
    helper.ItemCount(); //should == 6
    helper.PageItemCount(0); //should == 4
    helper.PageItemCount(1); // last page - should == 2
    helper.PageItemCount(2); // should == -1 since the page is invalid

    // pageIndex takes an item index and returns the page that it belongs on
    helper.PageIndex(5); //should == 1 (zero based index)
    helper.PageIndex(2); //should == 0
    helper.PageIndex(20); //should == -1
    helper.PageIndex(-10); //should == -1

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/515bb423de843ea99400000a
  Discuss Link:
    https://www.codewars.com/kata/515bb423de843ea99400000a/discuss
  Solutions Link:
    https://www.codewars.com/kata/515bb423de843ea99400000a/solutions
*/
// Long Solution

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper (collection, itemsPerPage) {
  this.items = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.items.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.itemCount() / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex >= this.pageCount() || pageIndex < 0) return -1;
  return this.items
    .slice(pageIndex * this.itemsPerPage, this.itemCount())
    .splice(0, this.itemsPerPage).length;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (this.itemCount() === 0 || itemIndex < 0 || itemIndex > this.itemCount()) {
    return -1;
  }
  if (itemIndex === 0 || itemIndex / this.itemsPerPage === 1) {
    return 0;
  }

  return Math.floor(itemIndex / this.itemsPerPage);
};

// Function Export
module.exports = PaginationHelper;
