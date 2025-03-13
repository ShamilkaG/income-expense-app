 <?php


 use App\Models\Income;
 use Illuminate\Foundation\Testing\RefreshDatabase;
 use Tests\TestCase;

 final class AddIncomeTest extends TestCase
{
    use RefreshDatabase;
    public function test_income_and_category_database_save()
    {
        // A - Arrange
        // dummy data that we need to do the test

//        $income = Income::factory()->create(); //Came all the fields
        $income = Income::factory()->make()->toArray() ;// came data input fields only

//        dd($income);

        // A - Act / Action
        // implement that we need to test part. (endpoint/class/function)
       $response =  $this->post('api/add-income', $income);

        // A - Assertion
//        $this->assertTrue(true);
        //1
        $response->assertStatus(200);
        //2
//        $response->assertJsonStructure([]);
        //3
        $response->assertJsonStructure([
            "message" ,
        ]);
        //4
        $response->assertSimilarJson([
            'message' => 'Income added successfully',
        ]);
        //5
        $this->assertDatabaseHas('income', [
            'income_amount' => $income['income_amount'],
            'income_category' => $income['income_category'],
        ]);
    }

    public function test_return_bad_response_when_income_amount_not_exists()
    {

    }
}
