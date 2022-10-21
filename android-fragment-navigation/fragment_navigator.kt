import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.fragment.app.Fragment
import com.dbuckfan.abtsite.databinding.ActivityMainBinding
import com.dbuckfan.abtsite.fragments.FilterFragment
import com.dbuckfan.abtsite.fragments.HomeFragment

class MainActivity : AppCompatActivity() {

    companion object {
        lateinit var mActivity: AppCompatActivity
    }

    private lateinit var binding: ActivityMainBinding
    private lateinit var homeFragment: HomeFragment
    private lateinit var filterFragment: FilterFragment

    private val fragments: Array<Fragment>
        get() = arrayOf(
            homeFragment,
            filterFragment
        )

    private var selectedIndex = 1

    private val selectedFragment get() = fragments[selectedIndex]

    private fun selectFragment(selectedFragment: Fragment) {

        var transaction = supportFragmentManager.beginTransaction()

        fragments.forEachIndexed { index, fragment ->

            if (selectedFragment == fragment) {
                transaction = transaction.attach(fragment)
                selectedIndex = index
            } else {
                transaction = transaction.detach(fragment)
            }
        }
        transaction.commit()

        when (selectedFragment) {
            homeFragment -> {
                binding.apply {
                    viewHome.visibility = View.VISIBLE
                    ivHome.setImageResource(R.drawable.ic_home)
                    tvHome.setTextColor(resources.getColor(R.color.black))
                    viewFilter.visibility = View.INVISIBLE
                    ivFilter.setImageResource(R.drawable.ic_filter_hollow)
                    tvFilter.setTextColor(resources.getColor(R.color.black_hollow))
                }
            }
            filterFragment -> {
                binding.apply {
                    viewHome.visibility = View.INVISIBLE
                    ivHome.setImageResource(R.drawable.ic_home_hollow)
                    tvHome.setTextColor(resources.getColor(R.color.black_hollow))
                    viewFilter.visibility = View.VISIBLE
                    ivFilter.setImageResource(R.drawable.ic_filter)
                    tvFilter.setTextColor(resources.getColor(R.color.black))
                }
            }
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        mActivity = this
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        initViews(savedInstanceState)
        initListeners()
    }

    private fun initViews(savedInstanceState: Bundle?) {

        if (savedInstanceState == null) {

            homeFragment = HomeFragment()
            filterFragment = FilterFragment()

            supportFragmentManager.beginTransaction()
                .add(R.id.fragment_container, homeFragment, TAG_HOME_FRAGMENT)
                .add(R.id.fragment_container, filterFragment, TAG_FILTER_FRAGMENT)
                .commit()
        } else {

            homeFragment =
                supportFragmentManager.findFragmentByTag(TAG_HOME_FRAGMENT) as HomeFragment
            filterFragment =
                supportFragmentManager.findFragmentByTag(TAG_FILTER_FRAGMENT) as FilterFragment

            selectedIndex = savedInstanceState.getInt(KEY_SELECTED_INDEX, 0)
        }

        selectFragment(selectedFragment)
    }

    private fun initListeners() {

        binding.llHome.setOnClickListener { selectFragment(homeFragment) }
        binding.llFilter.setOnClickListener { selectFragment(filterFragment) }
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)

        outState.putInt(KEY_SELECTED_INDEX, selectedIndex)
    }
}

private const val TAG_HOME_FRAGMENT = "TAG_HOME_FRAGMENT"
private const val TAG_FILTER_FRAGMENT = "TAG_FILTER_FRAGMENT"
private const val KEY_SELECTED_INDEX = "KEY_SELECTED_INDEX"